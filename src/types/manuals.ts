export type ManualCategory = 
  | 'Operaciones'
  | 'Seguridad y Cumplimiento'
  | 'Tecnología e Infraestructura'
  | 'Finanzas y Auditoría'
  | 'Recursos Humanos';

export type ManualType = 'Guía Técnica' | 'Protocolo Estándar' | 'Procedimiento de Emergencia' | 'Política Corporativa';

export type ManualStatus = 'Vigente' | 'En revisión' | 'Actualizado' | 'Archivado';

export interface ManualItem {
  id: string;
  code: string;
  title: string;
  description: string;
  category: ManualCategory;
  type: ManualType;
  status: ManualStatus;
  version: string;
  lastUpdated: string;
  readTime: string;
  author: string;
  department: string;
  downloadsCount: number;
  sectionsCount: number;
  contentSummary: string[];
}
