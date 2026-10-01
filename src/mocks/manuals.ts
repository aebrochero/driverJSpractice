import { ManualItem } from '../types/manuals';

export const mockManuals: ManualItem[] = [
  {
    id: 'man-001',
    code: 'MAN-SEC-01',
    title: 'Protocolo de Seguridad de Accesos y Gestión de Identidades (IAM)',
    description: 'Estándares mandatorios para la asignación, revocación y auditoría periódica de privilegios de usuario en sistemas centrales.',
    category: 'Seguridad y Cumplimiento',
    type: 'Protocolo Estándar',
    status: 'Vigente',
    version: 'v3.4.1',
    lastUpdated: '22 de septiembre de 2026',
    readTime: '12 min de lectura',
    author: 'Gerencia de Ciberseguridad',
    department: 'Seguridad de la Información',
    downloadsCount: 428,
    sectionsCount: 8,
    contentSummary: [
      'Políticas de autenticación multifactor (MFA)',
      'Ciclo de vida de cuentas y aprovisionamiento',
      'Rotación mandatoria de credenciales maestras',
      'Auditoría y revisión trimestral de accesos'
    ]
  },
  {
    id: 'man-002',
    code: 'MAN-OPS-04',
    title: 'Manual Operativo de Conciliación y Liquidación Transaccional',
    description: 'Guía metodológica para el procesamiento diario de lotes de conciliación entre sistemas ERP bancarios y libros contables.',
    category: 'Finanzas y Auditoría',
    type: 'Guía Técnica',
    status: 'Vigente',
    version: 'v2.8.0',
    lastUpdated: '15 de agosto de 2026',
    readTime: '18 min de lectura',
    author: 'Dirección de Finanzas',
    department: 'Tesorería y Finanzas',
    downloadsCount: 312,
    sectionsCount: 11,
    contentSummary: [
      'Estructura de archivos de compensación',
      'Tratamiento de discrepancias y contracargos',
      'Aprobaciones escalonadas por umbral financiero',
      'Cierre contable automatizado fin de mes'
    ]
  },
  {
    id: 'man-003',
    code: 'MAN-IT-09',
    title: 'Procedimiento de Continuidad del Negocio y Recuperación ante Desastres (DRP)',
    description: 'Plan de acción crítico ante contingencias mayores en centros de datos, fallos de red primarios o indisponibilidad de proveedores clave.',
    category: 'Tecnología e Infraestructura',
    type: 'Procedimiento de Emergencia',
    status: 'Actualizado',
    version: 'v4.1.0',
    lastUpdated: '04 de septiembre de 2026',
    readTime: '25 min de lectura',
    author: 'Comité de Continuidad',
    department: 'Infraestructura Cloud',
    downloadsCount: 560,
    sectionsCount: 14,
    contentSummary: [
      'Niveles de severidad y matriz de escalamiento',
      'Objetivos RTO (< 30 min) y RPO (< 5 min)',
      'Protocolo de conmutación failover a región secundaria',
      'Canales de comunicación institucional de crisis'
    ]
  },
  {
    id: 'man-004',
    code: 'MAN-HR-02',
    title: 'Política de Protección de Datos Personales y Confidencialidad',
    description: 'Directrices corporativas para el tratamiento de información sensible de colaboradores, proveedores y clientes institucionales.',
    category: 'Recursos Humanos',
    type: 'Política Corporativa',
    status: 'Vigente',
    version: 'v1.9.3',
    lastUpdated: '11 de junio de 2026',
    readTime: '10 min de lectura',
    author: 'Departamento Jurídico y RRHH',
    department: 'Cumplimiento Legal',
    downloadsCount: 285,
    sectionsCount: 6,
    contentSummary: [
      'Clasificación de datos confidenciales y restringidos',
      'Consentimiento y ejercicio de derechos ARCO',
      'Acuerdos de confidencialidad (NDA)',
      'Procedimiento de reporte de brechas de privacidad'
    ]
  },
  {
    id: 'man-005',
    code: 'MAN-OPS-11',
    title: 'Estándar de Control de Calidad en Cadenas de Suministro y Despacho',
    description: 'Criterios de inspección, muestreo estadístico y validación de embarques previo a la recepción en almacenes centrales.',
    category: 'Operaciones',
    type: 'Protocolo Estándar',
    status: 'Vigente',
    version: 'v2.1.2',
    lastUpdated: '19 de julio de 2026',
    readTime: '15 min de lectura',
    author: 'Gerencia de Logística',
    department: 'Cadena de Suministro',
    downloadsCount: 194,
    sectionsCount: 7,
    contentSummary: [
      'Criterios de aceptación y rechazo técnico',
      'Inspección por lote y trazabilidad con código de barras',
      'Gestión de devoluciones a proveedores certificados',
      'Registro en el sistema WMS corporativo'
    ]
  },
  {
    id: 'man-006',
    code: 'MAN-SEC-08',
    title: 'Guía de Mitigación de Vulnerabilidades y Gestión de Parches Críticos',
    description: 'Flujo operativo para la aplicación de actualizaciones de seguridad en servidores de producción y terminales de trabajo.',
    category: 'Seguridad y Cumplimiento',
    type: 'Guía Técnica',
    status: 'En revisión',
    version: 'v3.0.0-rc',
    lastUpdated: '28 de septiembre de 2026',
    readTime: '14 min de lectura',
    author: 'Equipo de SecOps',
    department: 'Seguridad de la Información',
    downloadsCount: 167,
    sectionsCount: 9,
    contentSummary: [
      'Ventanas de mantenimiento y políticas de reinicio',
      'Evaluación de impacto CVSS v3.1',
      'Entorno de pruebas y validación funcional',
      'Rollback automático ante fallos de servicio'
    ]
  },
  {
    id: 'man-007',
    code: 'MAN-FIN-03',
    title: 'Manual de Políticas de Gastos de Viaje y Representación Comercial',
    description: 'Límites autorizados, procesos de comprobación digital de viáticos y políticas de reembolsos para personal corporativo.',
    category: 'Finanzas y Auditoría',
    type: 'Política Corporativa',
    status: 'Vigente',
    version: 'v2.0.4',
    lastUpdated: '02 de mayo de 2026',
    readTime: '8 min de lectura',
    author: 'Contraloría General',
    department: 'Finanzas',
    downloadsCount: 450,
    sectionsCount: 5,
    contentSummary: [
      'Topes de gasto diario por zona geográfica',
      'Requisitos fiscales para facturación válida',
      'Aprobación mediante plataforma interna',
      'Plazos de rendición de cuentas e informes'
    ]
  },
  {
    id: 'man-008',
    code: 'MAN-IT-12',
    title: 'Lineamientos para Arquitectura de Microservicios y APIs Corporativas',
    description: 'Convenciones de diseño de endpoints REST, versionamiento semántico, autenticación JWT y estándares de documentación OpenAPI.',
    category: 'Tecnología e Infraestructura',
    type: 'Guía Técnica',
    status: 'Vigente',
    version: 'v2.3.0',
    lastUpdated: '14 de agosto de 2026',
    readTime: '20 min de lectura',
    author: 'Arquitectura de Software',
    department: 'Tecnología',
    downloadsCount: 390,
    sectionsCount: 12,
    contentSummary: [
      'Estructura uniforme de respuestas HTTP',
      'Límites de tasa (Rate Limiting) y cuotas',
      'Monitoreo de telemetría y trazabilidad distribuida',
      'Contratos de esquema y versionamiento deprecado'
    ]
  },
  {
    id: 'man-009',
    code: 'MAN-OPS-02',
    title: 'Protocolo de Gestión de Cambios Operacionales en Sistemas Críticos',
    description: 'Marco estructurado para solicitud, evaluación por comité CAB y ejecución controlada de modificaciones operativas.',
    category: 'Operaciones',
    type: 'Protocolo Estándar',
    status: 'Archivado',
    version: 'v1.5.0',
    lastUpdated: '10 de enero de 2025',
    readTime: '16 min de lectura',
    author: 'Oficina de Procesos',
    department: 'Operaciones',
    downloadsCount: 110,
    sectionsCount: 8,
    contentSummary: [
      'Roles del Comité de Aprobación de Cambios (CAB)',
      'Plan de contingencia y rollback',
      'Revisión post-implementación (PIR)',
      'Registro auditable de modificaciones'
    ]
  }
];
