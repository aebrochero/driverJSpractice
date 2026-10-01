import React, { useState, useMemo } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { ManualsFilter } from '../../components/manuals/ManualsFilter';
import { ManualCard } from '../../components/manuals/ManualCard';
import { ManualDetailModal } from '../../components/manuals/ManualDetailModal';
import { EmptyState } from '../../components/ui/EmptyState';
import { Pagination } from '../../components/ui/Pagination';
import { mockManuals } from '../../mocks/manuals';
import { ManualItem } from '../../types/manuals';
import { BookOpen } from 'lucide-react';

export const ManualsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedManual, setSelectedManual] = useState<ManualItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageSize = 6;

  // Filtered dataset
  const filteredManuals = useMemo(() => {
    return mockManuals.filter((manual) => {
      const matchesSearch =
        searchQuery === '' ||
        manual.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manual.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manual.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manual.department.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || manual.category === selectedCategory;

      const matchesStatus =
        selectedStatus === 'all' || manual.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredManuals.length / pageSize) || 1;
  const paginatedManuals = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredManuals.slice(start, start + pageSize);
  }, [filteredManuals, currentPage, pageSize]);

  const handleOpenManual = (manual: ManualItem) => {
    setSelectedManual(manual);
    setIsModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setCurrentPage(1);
  };

  const hasActiveFilters =
    Boolean(searchQuery) || selectedCategory !== 'all' || selectedStatus !== 'all';

  return (
    <div className="space-y-6" data-tour="manuals-page">
      {/* 1. Page Header */}
      <PageHeader
        title="Manuales"
        subtitle="Repositorio central de documentación técnica, procedimientos estandarizados y políticas normativas vigentes en la organización."
      />

      {/* 2. Search & Filter Bar */}
      <ManualsFilter
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage(1);
        }}
        selectedStatus={selectedStatus}
        onStatusChange={(st) => {
          setSelectedStatus(st);
          setCurrentPage(1);
        }}
        onResetFilters={handleResetFilters}
        hasActiveFilters={hasActiveFilters}
        totalFiltered={filteredManuals.length}
      />

      {/* 3. Manuals Cards Grid */}
      {paginatedManuals.length > 0 ? (
        <div data-tour="manuals-list" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedManuals.map((manual) => (
              <ManualCard
                key={manual.id}
                manual={manual}
                onOpen={handleOpenManual}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="rounded-xl overflow-hidden border border-slate-200/80">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalRecords={filteredManuals.length}
              pageSize={pageSize}
              onPageChange={(p) => setCurrentPage(p)}
            />
          </div>
        </div>
      ) : (
        <EmptyState
          icon={<BookOpen className="w-6 h-6 stroke-[1.5]" />}
          title="No se encontraron manuales"
          description="No existen manuales ni documentos técnicos que coincidan con los criterios de búsqueda o filtros seleccionados."
          actionLabel="Restablecer filtros"
          onAction={handleResetFilters}
        />
      )}

      {/* 4. Inspection Modal */}
      <ManualDetailModal
        manual={selectedManual}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
