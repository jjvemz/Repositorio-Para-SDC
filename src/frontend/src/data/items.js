let id = -1;

export default [
  {id: id++, name:"Productividad Total de los Factores, PTF Construcción", file:'PTF_Variacion', graph:'KpiGraph'}
  ,{id: id++, name:"Productividad Media Laboral Construcción", file:'PML_Chile_Contruccion', graph:'KpiGraph'}
  ,{id: id++, name:"Gasto en innovación en relación a las ventas", file:'Gasto_en_nnovación_en_relación_a_las_ventas', graph:'KpiGraph'}
  ,{id: id++, name:"Ranking Formalidad- trabajadores dependientes por tipo de contrato", file:'Ranking_Formalidad', graph:'KpiGraph'},
  {id: id++, name:"Cesantes sector construcción respecto total cesantes país %", file:'Promedio_Cesantes', graph:'KpiGraph'}
  ,{id: id++, name:"Promedio Anual Sector Región", file:'Promedio_Anual_Sector_Region', graph:'RegionStackedGraph' },
  {id: id++, name:"Participación respecto economía", file:'Participacion_respecto_economia', graph:'StackedGraph'}
  ,{id: id++, name:"PIB por región MM$", file:'Participacion_regional_MM_total_pais_anio', graph:'RegionStackedGraph' }
  ,{id: id++, name:"Inversión en Infraestructura mill UF por tipo", file:'Inversion_Infraestructura', graph:'TimeSerie'}
  ,{id: id++, name:"Índice de la Actividad de la Construcción Regional, INACOR, % variación mensual", file:'INACOR_Variacion_Mensual', graph:'TimeSerie'}
  ,{id: id++, name:"Permisos Edificación Acumulados a la fecha m2", file:'Permisos_Edificacion_Acumulados_m2', graph:'TimeSerie'}
  ,{id: id++, name:"Índice de la Actividad de la Construcción Regional, INACOR, % variación anual", file:'INACOR_Variacion_Anual', graph:'TimeSerie'}
  ,{id: id++, name:"Permiso de Edificación m2 por región, % al total país", file:'Permisos_Edificacion_por_Anio', graph:'TimeSerie'}
  ,{id: id++, name:"Trabajadores sector construcción y % respecto total país.", file:'Trabajadores_Promedio_Anual', graph:'TimeSerie'},
  {id: id++, name:"Índice Mensual de Actividad de la Construcción", file:'IMACON_Variacion_Mensual_2', graph:'TimeSerie'}
  ,{id: id++, name:"Trabajadores sector construcción por región.", file:'Trabajadores_Region', graph:'TimeSerie'}
  ,{id: id++, name:"Permisos Edificación", file:'Permisos_Edificacion_M2', graph:'TimeSerie'}
  ,{id: id++, name:"Permiso de Edificación de Vivienda por tipo de obra y m2", file:'Permisos_Edificacion_Viviendas', graph:'TimeSerie'}
  ,{id: id++, name:"Inversión en Vivienda mill UF por tipo de Vivienda", file:'Inversion_Vivivenda', graph:'TimeSerie'}
  ,{id: id++, name:"Índice Mensual de Actividad de la Construcción, IMACON, % variación anual", file:'IMACON_Variacion_Anual', graph:'TimeSerie'}
  ,{id: id++, name:"Por Regiones Trimestre Mensual", file:'Por_Regiones_Trimestre_Mensual', graph:'TimeSerie'}
  ,{id: id++, name:"Índice Mensual de Actividad de la Construcción, IMACON, % variación mensual (CChC)", file:'CChC_IMACON_Variacion_Mensual', graph:'TimeSerie'}
  ,{id: id++, name:"Índice Mensual de Actividad de la Construcción, IMACON, % variación anual (CChC)", file:'CChC_IMACON_Variacion_Anual', graph:'TimeSerie'}
  ,{id: id++, name:"Índice de la Actividad de la Construcción Regional, INACOR, % variación mensual (CChC)", file:'CChC_INACOR_Variacion_Mensual', graph:'TimeSerie'}
  ,{id: id++, name:"Índice de la Actividad de la Construcción Regional, INACOR, % variación anual (CChC)", file:'CChC_INACOR_Variacion_Anual', graph:'TimeSerie'}
  ,{id: id++, name:"Ventas, stock de viviendas y velocidad de venta Santiago, mensual (CChC)", file:'CChC_Ventas_Santiago' , graph:'TimeSerie'}
  ,{id: id++, name:"Índice Real de Precios de Vivienda Santiago % CChC", file:'CChC_Indice_Real_Precios_Vivienda_Santiago', graph:'TimeSerie'}
  ,{id: id++, name:"PIB Construcción (%)", file:'PIB_Construccion_PER', graph: 'KpiGraph'}
  ,{id: id++, name:"PIB Construcción ($MM)", file:'PIB_Construccion_MM', graph:'KpiGraph'}
  ,{id: id++, name:"Tasa de Innovación en la Industria de la Construcción", file:'Tasa_de_Innovación_en_la_Industria_de_la_Construcción', graph:'KpiGraph'}
  ,{id: id++, name:"Edificaciones Certificación Sustentable", file:'Edificaciones_Certificacion_Sustentable',graph:'KpiGraph'}
  ,{id: id++, name:"Índice de materialidad de las viviendas por Región", file:'Habitacionales_CASEN_Materialidad', graph:'TotalStackedGraph'}
  ,{id: id++, name:"IMACON Variación Mensual", file:'IMACON_Variacion_Mensual', graph:'TimeSerie'}
  ,{id: id++, name:"Vivienda cantidad y m2 acumulados", file:'Vivienda_cantidad_y_m2_acumulados', graph:'TimeSerie'}
  ,{id: id++, name:"Índice del estado de conservación de las viviendas por Región", file:'Habitacionales_CASEN_Conservacion', graph:'TotalStackedGraph'}
  ,{id: id++, name:"Participacion Empleo Sectorial Total Nacional PER", file:'Participacion_Empleo_Sectorial_Total_Nacional_PER', graph:'KpiGraph'}
  ,{id: id++, name:"Índice Real de Precios de Vivienda Santiago %", file:'Indice_Real_Precios_Vivienda_Santiago', graph:'TimeSerie'}
  ,{id: id++, name:"Velocidad de venta nacional por tipo de vivienda meses.", file:'Ventas_de_viviendas', graph:'TimeSerie'}
  ,{id: id++, name:"Ventas, stock de viviendas y velocidad de venta Santiago, mensual.", file:'Ventas_Santiago', graph:'TimeSerie'}
  ,{id: id++, name:"Grado de hacinamiento por Región", file:'Habitacionales_CASEN_Hacinamiento', graph:'TotalStackedGraph'}
  ,{id: id++, name:"Innovación Continua %", file:'Continuidad_de_la_Innovación', graph:'KpiGraph'}
  ,{id: id++, name:"Nota Mercado: Otros Factores", file:'Nota_Otros', graph:'KpiGraph'}
  ,{id: id++, name:"Accidentes, Tasa de accidentabilidad y Tasa de mortalidad", file:'Accidentes_Tasa_acc', graph:'TimeSerie'}
  ,{id: id++, name:"Nota Costos", file:'Nota_Costos', graph:'KpiGraph'}
  ,{id: id++, name:"Innovación Futura a 2 años", file:'Innovación_Futura_a_2_años', graph:'KpiGraph'}
  ,{id: id++, name:"Empresas adherentes al Seguro de Ley sobre accidentes o enfermedad profesiona", file:'Num_Empr_adherentes_Seguro_Ley_Actividad_Economica', graph:'TimeSerie'}
  ,{id: id++, name:"Nota Conocimiento", file:'Nota_Conocimiento', graph:'KpiGraph'}
  ,{id: id++, name:"Instituciones con capacitación formal de BIM por tipo de institución y nivel de carrera", file:'Instituciones_capacitación_formal_BIM_institución_carrera', graph:'TimeSerie'}
  ,{id: id++, name:"Trabajadores protegidos por el Seguro de Ley sobre accidentes o enfermedad profesional", file:'Trabajadores_protegidos_Seguro_Ley_Actividad_Económica', graph:'TimeSerie'}
  ,{id: id++, name:"Nota Mercado", file:'Nota_Mercado', graph:'KpiGraph'}
  ,{id: id++, name:"Instituciones con capacitación formal de BIM por tipo de institución y región", file:'Instituciones_capacitación_formal_BIM_institución_region', graph:'TimeSerie'}
  ,{id: id++, name:"Trabajadores protegidos por el Seguro de Ley sobre accidentes o enfermedad profesional por región.", file:'Trabajadores_protegidos_sector_construcción_región', graph:'StackedGraph'}
  ,{id: id++, name:"Participación anual de edificaciones sustentables, uso Comercial.", file:'Indicador_anual_Sustentabilidad_Comercial', graph:'TimeSerie'}
  ,{id: id++, name:"Participación anual de edificaciones sustentables, uso Público.", file:'Indicador_anual_Sustentabilidad_Publico', graph:'TimeSerie'}
  ,{id: id++, name:"Participación anual de edificaciones sustentables, uso Residencial.", file:'Indicador_anual_de_Sustentabilidad_Residencial', graph:'TimeSerie'}
  ,{id: id++, name:"Participación anual de edificaciones sustentables, uso Público.", file:'Indicador_anual_de_Sustentabilidad_Total', graph:'TimeSerie'}
  ,{id: id++, name:"Participación mensual de edificaciones sustentables, uso Comercial.", file:'Indicador_mensual_de_Sustentabilidad_Comercial', graph:'TimeSerie'}
  ,{id: id++, name:"Participación mensual de edificaciones sustentables, uso Público.", file:'Indicador_mensual_de_Sustentabilidad_Publico', graph:'TimeSerie'}
  ,{id: id++, name:"Participación mensual de edificaciones sustentables, uso Residencial.", file:'Indicador_mensual_de_Sustentabilidad_Residencial', graph:'TimeSerie'}
  ,{id: id++, name:"Participación mensual de edificaciones sustentables, Total usos.", file:'Indicador_mensual_de_Sustentabilidad_Total', graph:'TimeSerie'}
  ,{id: id++, name:"Proyectos certificados por tipo de Certificación y tipo de proyecto", file:'Cantidad_proyectos_tipo_Certificacion_y_proyecto_mensual', graph:'TimeSerie'}
  , {id: id++, name:"CEV1", file:'CEV1', graph:'StackedGraph'}
  ,{id: id++, name:"CEV2", file:'CEV2', graph:'StackedGraph'}
  ,{id: id++, name:"LEED CES", file:'LEED_CES', graph:'MapGraph'}
  , {id: id++, name:'Índice de Despacho de Materiales de Construcción CChC', file: 'CChC_materiales',  graph:'TimeSerie'}
  ,{id: id++, name:'Permisos de Edificacion', file:'Permisos_de_Edificacion', graph:'TimeSerie'}
  , {id: id++, name:"PIB Construcción" ,file:'PIB_Contruccion', graph:'KpiGraph'}
];
