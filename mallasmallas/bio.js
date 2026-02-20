window.MALLAS_DATA = window.MALLAS_DATA || {};

window.MALLAS_DATA.bio = [
  { year: 'Primer Año', sems: [
    { num: 1, label: '1er Semestre', cursos: [
      { code: 'BIO101A', name: 'Tópicos de Biología',        crd: 5  },
      { code: 'BIO141C', name: 'Biología de la Célula',      crd: 10 },
      { code: 'QIM101L', name: 'Lab. Química General',       crd: 10 },
      { code: 'QIM100I', name: 'Química General I',          crd: 10 },
      { code: 'MAT1000', name: 'Pre-Cálculo',                crd: 10 },
      { code: 'FIL2001', name: 'Filosofía: ¿Para qué?',      crd: 10 }
    ]},
    { num: 2, label: '2do Semestre', cursos: [
      { code: 'BIO110C', name: 'Biología de Organismos y Comunidades', crd: 10 },
      { code: 'FIS109C', name: 'Física para Ciencias',                 crd: 10 },
      { code: 'QIM100B', name: 'Química General II',                   crd: 10 },
      { code: 'MAT1100', name: 'Cálculo I',                            crd: 10 }
    ]}
  ]},
  { year: 'Segundo Año', sems: [
    { num: 3, label: '3er Semestre', cursos: [
      { code: 'BIO152C', name: 'Bases Físicas de los Procesos Biológicos', crd: 10 },
      { code: 'BIO242C', name: 'Bioestadística',                           crd: 10 },
      { code: 'QIM200',  name: 'Química Orgánica Fundamental',             crd: 10 }
    ]},
    { num: 4, label: '4to Semestre', cursos: [
      { code: 'BIO151E', name: 'Biología de los Microorganismos', crd: 10 },
      { code: 'QIM150',  name: 'Química-Física',                  crd: 10 }
    ]}
  ]},
  { year: 'Tercer Año', sems: [
    { num: 5, label: '5to Semestre',
      optionalNote: 'Elige UNA opción: BIO225C (Fisiología y Bioquímica Vegetal) o BIO274E (Biología y Fisiología Celular)',
      cursos: [
        { code: 'BIO226E', name: 'Genética y Evolución',               crd: 10 },
        { code: 'BIO228C', name: 'Bioquímica y Genética Molecular',    crd: 10 },
        { code: 'BIO297C', name: 'Lab. Bioquímica y Biología Celular', crd: 10 },
        { code: 'BIO225C', name: 'Fisiología y Bioquímica Vegetal',    crd: 10, optional: true },
        { code: 'BIO274E', name: 'Biología y Fisiología Celular',      crd: 10, optional: true }
    ]},
    { num: 6, label: '6to Semestre', cursos: [
      { code: 'BIO231C', name: 'Ecología',                         crd: 10 },
      { code: 'BIO298E', name: 'Trabajo Experimental en Ecología', crd: 5  },
      { code: 'BIO219E', name: 'Biología y Diversidad Vegetal',    crd: 10 },
      { code: 'BIO227E', name: 'Biología y Diversidad Animal',     crd: 10 },
      { code: 'BIO299E', name: 'Fisiología',                       crd: 10 },
      { code: 'BIO299L', name: 'Laboratorio de Fisiología',        crd: 5  }
    ]}
  ]},
  { year: 'Cuarto Año — Licenciatura', sems: [
    { num: 7, label: '7mo Semestre', cursos: [] },
    { num: 8, label: '8vo Semestre', cursos: [
      { code: 'BIO296C', name: 'Seminario de Investigación / cursos (agregar en lista OPR) / Práctica extramural', crd: 30 }
    ]}
  ]}
];
