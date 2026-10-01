export type RecordStatus = 'Completado' | 'En proceso' | 'Pendiente' | 'Observado' | 'Cancelado';

export type OperationType = 
  | 'Transferencia Corporativa'
  | 'Auditoría de Activos'
  | 'Aprovisionamiento'
  | 'Conciliación Bancaria'
  | 'Despliegue de Seguridad'
  | 'Emisión de Póliza';

export interface DataRecord {
  id: string;
  code: string;
  entityName: string;
  operationType: OperationType;
  date: string;
  amount: number;
  currency: string;
  status: RecordStatus;
  responsible: string;
  department: string;
  notes: string;
}

export type SortField = 'code' | 'entityName' | 'operationType' | 'date' | 'amount' | 'status';
export type SortDirection = 'asc' | 'desc';
