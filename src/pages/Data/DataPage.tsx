import React, { useState, useMemo } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { TableToolbar } from '../../components/tables/TableToolbar';
import { DataTable } from '../../components/tables/DataTable';
import { DataCardList } from '../../components/tables/DataCardList';
import { RecordDetailModal } from '../../components/tables/RecordDetailModal';
import { Pagination } from '../../components/ui/Pagination';
import { EmptyState } from '../../components/ui/EmptyState';
import { mockRecords } from '../../mocks/records';
import { DataRecord, SortField, SortDirection } from '../../types/records';
import { useAuth } from '../../context/AuthContext';
import { Database } from 'lucide-react';

export const DataPage: React.FC = () => {
  const { showToast } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [operationFilter, setOperationFilter] = useState('all');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [selectedRecord, setSelectedRecord] = useState<DataRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sorting handler
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Filtered and sorted data
  const filteredAndSortedRecords = useMemo(() => {
    let result = mockRecords.filter((rec) => {
      const matchesSearch =
        searchQuery === '' ||
        rec.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rec.entityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rec.responsible.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rec.notes.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || rec.status === statusFilter;

      const matchesOperation =
        operationFilter === 'all' || rec.operationType === operationFilter;

      return matchesSearch && matchesStatus && matchesOperation;
    });

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === 'amount') {
        comparison = a.amount - b.amount;
      } else if (sortField === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        const valA = String(a[sortField]).toLowerCase();
        const valB = String(b[sortField]).toLowerCase();
        comparison = valA.localeCompare(valB);
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchQuery, statusFilter, operationFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedRecords.length / pageSize) || 1;
  const paginatedRecords = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredAndSortedRecords.slice(start, start + pageSize);
  }, [filteredAndSortedRecords, currentPage, pageSize]);

  const handleSelectRecord = (record: DataRecord) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setOperationFilter('all');
    setCurrentPage(1);
  };

  // CSV Export logic
  const handleExportCSV = () => {
    try {
      const headers = ['Código', 'Entidad', 'Operación', 'Fecha', 'Monto USD', 'Estado', 'Responsable'];
      const rows = filteredAndSortedRecords.map((r) => [
        r.code,
        `"${r.entityName.replace(/"/g, '""')}"`,
        `"${r.operationType}"`,
        r.date,
        r.amount.toFixed(2),
        r.status,
        `"${r.responsible}"`,
      ]);

      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `vortex_registros_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast({
        type: 'success',
        title: 'Exportación completada',
        message: `Se han exportado ${filteredAndSortedRecords.length} registros a formato CSV.`
      });
    } catch {
      showToast({
        type: 'error',
        title: 'Error de exportación',
        message: 'No fue posible generar el archivo CSV en este momento.'
      });
    }
  };

  const hasFilters =
    Boolean(searchQuery) || statusFilter !== 'all' || operationFilter !== 'all';

  return (
    <div className="space-y-6" data-tour="data-page">
      {/* 1. Page Header */}
      <PageHeader
        title="Datos"
        subtitle="Consulta, auditoría y análisis consolidado de registros transaccionales, operaciones de infraestructura y conciliaciones contables."
      />

      {/* 2. Table Shell (Toolbar + Table + Pagination) */}
      <div className="bg-white rounded-xl shadow-xs overflow-hidden border border-slate-200/90">
        <TableToolbar
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(1);
          }}
          statusFilter={statusFilter}
          onStatusFilterChange={(st) => {
            setStatusFilter(st);
            setCurrentPage(1);
          }}
          operationFilter={operationFilter}
          onOperationFilterChange={(op) => {
            setOperationFilter(op);
            setCurrentPage(1);
          }}
          pageSize={pageSize}
          onPageSizeChange={(sz) => {
            setPageSize(sz);
            setCurrentPage(1);
          }}
          onExport={handleExportCSV}
          onReset={handleResetFilters}
          hasFilters={hasFilters}
          totalFiltered={filteredAndSortedRecords.length}
        />

        {paginatedRecords.length > 0 ? (
          <>
            {/* Desktop / Tablet Table View */}
            <DataTable
              records={paginatedRecords}
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSort}
              onSelectRecord={handleSelectRecord}
            />

            {/* Mobile Card Transformation View */}
            <DataCardList
              records={paginatedRecords}
              onSelectRecord={handleSelectRecord}
            />

            {/* Pagination Controls */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalRecords={filteredAndSortedRecords.length}
              pageSize={pageSize}
              onPageChange={(p) => setCurrentPage(p)}
            />
          </>
        ) : (
          <div className="p-8">
            <EmptyState
              icon={<Database className="w-6 h-6 stroke-[1.5]" />}
              title="No se encontraron registros"
              description="No existen operaciones que coincidan con la búsqueda o los filtros aplicados."
              actionLabel="Restablecer filtros"
              onAction={handleResetFilters}
            />
          </div>
        )}
      </div>

      {/* 3. Deep Inspection Record Modal */}
      <RecordDetailModal
        record={selectedRecord}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
