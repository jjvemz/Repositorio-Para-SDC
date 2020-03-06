export function GraphsData(){
    return  [
      {name:"PTF Variación", file:'PTF_Variacion', graph:'KpiGraph'},{name:"PML Chile Construcción", file:'PML_Chile_Contruccion', graph:'KpiGraph'}
      ,{name:"Gasto en innovación en relación a las ventas", file:'Gasto_en_nnovación_en_relación_a_las_ventas', graph:'TotalStackedGraph'},{name:"Ranking Formalidad", file:'Ranking_Formalidad', graph:'KpiGraph'},
      {name:"Promedio Cesantes", file:'Promedio_Cesantes', graph:'KpiGraph'},{name:"Promedio Anual Sector Región", file:'Promedio_Anual_Sector_Region', graph:'RegionStackedGraph'},
      {name:"Participación respecto economía", file:'Participacion_respecto_economia', graph:'StackedGraph'},{name:"Participación regional MM total pais año", file:'Participacion_regional_MM_total_pais_anio', graph:'RegionStackedGraph'}
      ,{name:"Inversión Infraestructura", file:'Inversion_Infraestructura', graph:'TimeSerie'},{name:"INACOR: Variación Mensual", file:'INACOR_Variacion_Mensual', graph:'TimeSerie'}
      ,{name:"Permisos Edificacion Acumulados m2", file:'Permisos_Edificacion_Acumulados_m2', graph:'TimeSerie'},{name:"INACOR: Variacion Anual", file:'INACOR_Variacion_Anual', graph:'TimeSerie'}
      ,{name:"Permisos Edificación por Año", file:'Permisos_Edificacion_por_Anio', graph:'TimeSerie'},{name:"Trabajadores Promedio (Anual)", file:'Trabajadores_Promedio_Anual', graph:'TimeSerie'},
      {name:"IMACON Variacion Mensual de Macroindicadores", file:'IMACON_Variacion_Mensual_2', graph:'TimeSerie'}, {name:"Trabajadores por Región", file:'Trabajadores_Region', graph:'TimeSerie'}
      ,{name:"Permisos Edificación", file:'Permisos_Edificacion_M2', graph:'TimeSerie'}, {name:"Permisos Edificación Viviendas", file:'Permisos_Edificacion_Viviendas', graph:'TimeSerie'}
      ,{name:"Inversion Vivivenda", file:'Inversion_Vivivenda', graph:'TimeSerie'},{name:"IMACON: Variacion Anual", file:'IMACON_Variacion_Anual', graph:'TimeSerie'}
      ,{name:"Por Regiones Trimestre Mensual", file:'Por_Regiones_Trimestre_Mensual', graph:'TimeSerie'},{name:"CChC IMACON Variacion Mensual", file:'CChC_IMACON_Variacion_Mensual', graph:'TimeSerie'}
      ,{name:"CChC IMACON: Variacion Anual", file:'CChC_IMACON_Variacion_Anual', graph:'TimeSerie'},{name:"CChC INACOR: Variacion Mensual", file:'CChC_INACOR_Variacion_Mensual', graph:'TimeSerie'}
      ,{name:"CChC INACOR: Variacion Anual", file:'CChC_INACOR_Variacion_Anual', graph:'TimeSerie'}, {name:"CChC Ventas Santiago", file:'CChC_Ventas_Santiago' , graph:'TimeSerie'}
      ,{name:"CChC: Indice Real Precios Vivienda Santiago", file:'CChC_Indice_Real_Precios_Vivienda_Santiago', graph:'TimeSerie'}, {name:"PIB Construcción PER", file:'PIB_Construccion_PER', graph: 'KpiGraph'}
      ,{name:"PIB Construcción MM", file:'PIB_Construccion_MM', graph:'KpiGraph'},{name:"Tasa de Innovación en la Industria de la Construcción", file:'Tasa_de_Innovación_en_la_Industria_de_la_Construcción', graph:'TotalStackedGraph'}
      ,{name:"Edificaciones Certificación Sustentable", file:'Edificaciones_Certificacion_Sustentable',graph:'KpiGraph'},{name:"Habitacionales CASEN Materialidad", file:'Habitacionales_CASEN_Materialidad', graph:'TotalStackedGraph'}
      ,{name:"IMACON Variación Mensual", file:'IMACON_Variacion_Mensual', graph:'TimeSerie'},{name:"Vivienda cantidad y m2 acumulados", file:'Vivienda_cantidad_y_m2_acumulados', graph:'TimeSerie'}
      ,{name:"Habitacionales CASEN Conservación", file:'Habitacionales_CASEN_Conservacion', graph:'TotalStackedGraph'}, {name:"Participacion Empleo Sectorial Total Nacional PER", file:'Participacion_Empleo_Sectorial_Total_Nacional_PER', graph:'KpiGraph'}
      ,{name:"Indice Real Precios Vivienda Santiago", file:'Indice_Real_Precios_Vivienda_Santiago', graph:'TimeSerie'}, {name:"Ventas de viviendas", file:'Ventas_de_viviendas', graph:'TimeSerie'}
      ,{name:"Ventas Santiago", file:'Ventas_Santiago', graph:'TimeSerie'},{name:"Habitacionales CASEN Hacinamiento", file:'Habitacionales_CASEN_Hacinamiento', graph:'TotalStackedGraph'}
      ,{name:"Continuidad de la Innovación", file:'Continuidad_de_la_Innovación', graph:'TotalStackedGraph'},{name:"Nota Otros", file:'Nota_Otros', graph:'TotalStackedGraph'}
      ,{name:"Accidentes Tasa acc", file:'Accidentes_Tasa_acc', graph:'TimeSerie'}, {name:"Nota Costos", file:'Nota_Costos', graph:'TotalStackedGraph'}
      ,{name:"Innovación Futura a 2 años", file:'Innovación_Futura_a_2_años', graph:'TotalStackedGraph'},{name:"Numero Empresas adherentes al seguro de ley de actividad económica", file:'Num_Empr_adherentes_Seguro_Ley_Actividad_Economica', graph:'TimeSerie'}
      ,{name:"Nota Conocimiento", file:'Nota_Conocimiento', graph:'TotalStackedGraph'},{name:"Instituciones capacitación formal BIM institución carrera", file:'Instituciones_capacitación_formal_BIM_institución_carrera', graph:'TotalStackedGraph'}
      ,{name:"Trabajadores protegidos por el seguro de ley  de actividad Económica", file:'Trabajadores_protegidos_Seguro_Ley_Actividad_Económica', graph:'TimeSerie'},{name:"Nota Mercado", file:'Nota_Mercado', graph:'TotalStackedGraph'}
      ,{name:"Instituciones capacitación formal BIM institución región", file:'Instituciones_capacitación_formal_BIM_institución_region', graph:'TimeSerie'},{name:"Trabajadores protegidos sector construcción región", file:'Trabajadores_protegidos_sector_construcción_región', graph:'StackedGraph'}
      ,{name:"Indicador anual de sustentabilidad comercial", file:'Indicador_anual_Sustentabilidad_Comercial', graph:'TimeSerie'},{name:"Indicador anual sustentabilidad publico", file:'Indicador_anual_Sustentabilidad_Publico', graph:'TimeSerie'}
      ,{name:"Indicador anual de sustentabilidad residencial", file:'Indicador_anual_de_Sustentabilidad_Residencial', graph:'TimeSerie'} ,{name:"Indicador anual de Sustentabilidad Total", file:'Indicador_anual_de_Sustentabilidad_Total', graph:'TimeSerie'}
      ,{name:"Indicador mensual de Sustentabilidad Comercial", file:'Indicador_mensual_de_Sustentabilidad_Comercial', graph:'TimeSerie'},{name:"Indicador mensual de sustentabilidad publico", file:'Indicador_mensual_de_Sustentabilidad_Publico', graph:'TimeSerie'}
      ,{name:"Indicador mensual de Sustentabilidad Residencial", file:'Indicador_mensual_de_Sustentabilidad_Residencial', graph:'TimeSerie'},{name:"Indicador mensual de Sustentabilidad Total", file:'Indicador_mensual_de_Sustentabilidad_Total', graph:'TimeSerie'}
      ,{name:"Cantidad de proyectos tipo Certificacion y proyecto mensual", file:'Cantidad_proyectos_tipo_Certificacion_y_proyecto_mensual', graph:'TimeSerie'}, {name:"CEV1", file:'CEV1', graph:'StackedGraph'}
      ,{name:"CEV2", file:'CEV2', graph:'StackedGraph'},{name:"LEED CES", file:'LEED_CES', graph:'MapGraph'}, {name:'CChC materiales', file: 'CChC_materiales',  graph:'TimeSerie'}
      ,{name:'Permisos de Edificacion', file:'Permisos_de_Edificacion', graph:'TimeSerie'}, {name:"PIB_Contruccion" ,file:'PIB Construcción', graph:'KpiGraph'}
    ]
}
export function renderGraphsName(state, val){
  return(
    state.name.toLowerCase().indexOf(val.toLowerCase()) !==-1
  );
}
