import os

DATA_S3_BUCKET = 'smartdatainnovacion'
DATA_S3_PATH = 'https://{}.sfo2.digitaloceanspaces.com/'.format(DATA_S3_BUCKET)
if os.environ['LOCAL_DATA_FILES']=="1":
    DATA_S3_PATH = '/'


DATA_FILES = [
    {
        "name": "PIB_Construccion_MM",
        "files": [
            {"label": "PIB Construcción ($MM)", "name": "data/Destacado_01_PIB_Construccion.json" }
        ]
    },
    {
        "name": "PIB_Construccion_PER",
        "files": [
            {"label": "PIB Construcción (%)", "name": "data/Destacado_02_Porc_PIB_Construccion.json" }
        ]
    },
    {
        "name": "IMACON_Variacion_Mensual",
        "files": [
            {"label": "IMACON Variacion mensual", "name": "data/Destacado_03_IMACON.json" }
        ]
    },
    {
        "name": "Permisos_Edificacion_Acumulados_m2",
        "files": [
            {"label": "Permisos de Edificacion acumulados a la fecha (m2)", "name": "data/Destacado_04_Perm_Edificacion_m2.json" }
        ]
    },
    {
        "name": "Edificaciones_Certificacion_Sustentable",
        "files": [
            {"label": "Edificaciones con Certificación Sustentable", "name": "data/Destacado_05_Por_Certificacion_Sustentable.json" }
        ]
    },
    {
        "name": "Participacion_Empleo_Sectorial_Total_Nacional_PER",
        "files": [
            {"label": "Participación empleo sectorial en total nacional (%)", "name": "data/Destacado_06_Por_Trabajadores_Empleo_Nacional.json" }
        ]
    },
    {
        "name": "PTF_Variacion",
        "files": [
            {"label": "PTF - Variación", "name": "data/Macro_01_PTF.json" }
        ]
    },
    {
        "name": "PML_Chile_Contruccion",
        "files": [
            {"label": "PML - Chile y Contrucción", "name": "data/Macro_02_PML.json" }
        ]
    },
    {
        "name": "PIB_Contruccion",
        "files": [
            {"label": "PIB Contrucción", "name": "data/Macro_03_PIB_part_sector.json" }
        ]
    },
    {
        "name": "Participacion_respecto_economia",
        "files": [
            {"label": "Participación con respecto a la economía", "name": "data/Macro_04_PIB_segunEc.json" }
        ]
    },
    {
        "name": "Participacion_regional_MM_total_pais_anio",
        "files": [
            {"label": "Participación regional MM$/% al total país (por año)", "name": "data/Macro_05_PIB_region.json" }
        ]
    },
    {
        "name": "Permisos_Edificacion_M2",
        "files": [
            {"label": "Permisos Edificación en M2", "name": "data/Macro_06_Perm_Edif_m2.json" }
        ]
    },
    {
        "name": "Permisos_Edificacion_Viviendas",
        "files": [
            {"label": "Permisos Edificación - Viviendas", "name": "data/Macro_07_Perm_Edif_vvda.json" }
        ]
    },
    {
        "name": "Permisos_Edificacion_Acumulado",
        "files": [
            {"label": "Permisos Edificación Acumulado", "name": "data/Macro_08_Perm_edif_acumulado.json" }
        ]
    },
    {
        "name": "Permisos_Edificacion_por_Anio",
        "files": [
            {"label": "Permisos Edificación por Año", "name": "data/Macro_09_perm_edif_anio.json" }
        ]
    },
    {
        "name": "IMACON_Variacion_Mensual_2",
        "files": [
            {"label": "IMACON Variación Mensual", "name": "data/Macro_10_IMACON_varMes.json" }
        ]
    },
    {
        "name": "IMACON_Variacion_Anual",
        "files": [
            {"label": "IMACON Variación Anual", "name": "data/Macro_11_IMACON_varAnual.json" }
        ]
    },
    {
        "name": "INACOR_Variacion_Mensual",
        "files": [
            {"label": "INACOR Variación Mensual", "name": "data/Macro_12_INACOR_varMes.json" }
        ]
    },
    {
        "name": "INACOR_Variacion_Anual",
        "files": [
            {"label": "INACOR Variación Anual", "name": "data/Macro_13_INACOR_varAnual.json" }
        ]
    },
    {
        "name": "Inversion_Vivivenda",
        "files": [
            {"label": "INV vivivenda", "name": "data/Macro_14_Inv_vivienda.json" }
        ]
    },
    {
        "name": "Inversion_Infraestructura",
        "files": [
            {"label": "Inversión en Infraestructura", "name": "data/Macro_15_Inv_Infraestructura.json" }
        ]
    },
    {
        "name": "Trabajadores_Promedio_Anual",
        "files": [
            {"label": "Trabajadores Promedio Anual", "name": "data/Macro_16_Trabajadores_prom_anual.json" }
        ]
    },
    {
        "name": "Trabajadores_Region",
        "files": [
            {"label": "Trabajadores por Región", "name": "data/Macro_17_Trabajadores_region.json" }
        ]
    },
    {
        "name": "Promedio_Cesantes",
        "files": [
            {"label": "Promedio Cesantes", "name": "data/Macro_18_prom_cesantes.json" }
        ]
    },
    {
        "name": "Promedio_Anual_Sector_Region",
        "files": [
            {"label": "Promedio Anual por Sector por Región", "name": "data/Macro_19_sectores_region.json" }
        ]
    },
    {
        "name": "Por_Regiones_Trimestre_Mensual",
        "files": [
            {"label": "Por Regiones por Trimestre Mensual", "name": "data/Macro_20_part_cesantia_region.json" }
        ]
    },
    {
        "name": "Ranking_Formalidad",
        "files": [
            {"label": "Ranking de Formalidad", "name": "data/Macro_21_formalidad.json" }
        ]
    },
    {
        "name": "Indicador_anual_Sustentabilidad_Comercial",
        "files": [
            {"label": "Indicador anual de Sustentabilidad Comercial", "name": "data/Sust_01_Kpi_comercial.json" }
        ]
    },
    {
        "name": "Indicador_anual_Sustentabilidad_Publico",
        "files": [
            {"label": "Indicador anual de Sustentabilidad Público", "name": "data/Sust_02_Kpi_publico.json" }
        ]
    },
    {
        "name": "Indicador_anual_de_Sustentabilidad_Residencial",
        "files": [
            {"label": "Indicador anual de Sustentabilidad Residencial", "name": "data/Sust_03_Kpi_residencial.json" }
        ]
    },
    {
        "name": "Indicador_anual_de_Sustentabilidad_Total",
        "files": [
            {"label": "Indicador anual de Sustentabilidad Total", "name": "data/Sust_04_Kpi_total.json" }
        ]
    },
    {
        "name": "Indicador_mensual_de_Sustentabilidad_Comercial",
        "files": [
            {"label": "Indicador mensual de Sustentabilidad Comercial", "name": "data/Sust_05_serie_comercial.json" }
        ]
    },
    {
        "name": "Indicador_mensual_de_Sustentabilidad_Publico",
        "files": [
            {"label": "Indicador mensual de Sustentabilidad Público", "name": "data/Sust_06_serie_publico.json" }
        ]
    },
    {
        "name": "Indicador_mensual_de_Sustentabilidad_Residencial",
        "files": [
            {"label": "Indicador mensual de Sustentabilidad Residencial", "name": "data/Sust_07_serie_residencial.json" }
        ]
    },
    {
        "name": "Indicador_mensual_de_Sustentabilidad_Total",
        "files": [
            {"label": "Indicador mensual de Sustentabilidad Total", "name": "data/Sust_08_serie_total.json" }
        ]
    },
    {
        "name": "Cantidad_proyectos_tipo_Certificacion_y_proyecto_mensual",
        "files": [
            {"label": "Cantidad de proyectos por tipo de Certificación y de proyecto (Comercial, Público, Residencial) mensual", "name": "data/Sust_09_Num_proyectos_CES.json" }
        ]
    },
    {
        "name": "CEV1",
        "files": [
            {"label": "CEV1", "name": "data/Sust_10_cev1_cat.json" }
        ]
    },
    {
        "name": "CEV2",
        "files": [
            {"label": "CEV2", "name": "data/Sust_11_cev2_cat.json" }
        ]
    },
    {
        "name": "LEED_CES",
        "files": [
            {"label": "LEED", "name": "data/Sust_12_output_leed_ces.geojson" }
        ]
    },
    {
        "name": "Permisos_de_Edificacion",
        "files": [
            {"label": "Permisos de Edificación", "name": "data/IH_01_Perm_Edif_m2.json" }
        ]
    },
    {
        "name": "Vivienda_cantidad_y_m2_acumulados",
        "files": [
            {"label": "Vivienda cantidad y m2 acumulados", "name": "data/IH_02_Perm_Edif_vvda.json" }
        ]
    },
    {
        "name": "Ventas_de_viviendas",
        "files": [
            {"label": "Ventas de viviendas", "name": "data/IH_03_venta_viv.json" }
        ]
    },
    {
        "name": "Ventas_Santiago",
        "files": [
            {"label": "Ventas Santiago", "name": "data/IH_04_venta_stgo.json" }
        ]
    },
    {
        "name": "Indice_Real_Precios_Vivienda_Santiago",
        "files": [
            {"label": "Índice Real de Precios de Vivienda Santiago", "name": "data/IH_05_Ind_precios_stgo.json" }
        ]
    },
    {
        "name": "Habitacionales_CASEN_Hacinamiento",
        "files": [
            {"label": "Habitacionales CASEN: Hacinamiento", "name": "data/IH_06_Hacinamiento.json" }
        ]
    },
    {
        "name": "Habitacionales_CASEN_Materialidad",
        "files": [
            {"label": "Habitacionales_CASEN:_Materialidad", "name": "data/IH_07_Materialidad.json" }
        ]
    },
    {
        "name": "Habitacionales_CASEN_Conservacion",
        "files": [
            {"label": "Habitacionales CASEN: Conservación", "name": "data/IH_08_Conservacion.json" }
        ]
    },
    {
        "name": "Tasa_de_Innovación_en_la_Industria_de_la_Construcción",
        "files": [
            {"label": "Tasa de Innovación en la Industria de la Construcción", "name": "data/Inov_01_Tasa_inn.json" }
        ]
    },
    {
        "name": "Gasto_en_nnovación_en_relación_a_las_ventas",
        "files": [
            {"label": "Gasto en Innovación en relación a las ventas", "name": "data/Inov_02_gasto_inn.json" }
        ]
    },
    {
        "name": "Continuidad_de_la_Innovación",
        "files": [
            {"label": "Continuidad de la Innovación", "name": "data/Inov_03_Cont_inn.json" }
        ]
    },
    {
        "name": "Nota_Costos",
        "files": [
            {"label": "Nota Costos", "name": "data/Inov_04_Nota_Costos.json" }
        ]
    },
    {
        "name": "Nota_Conocimiento",
        "files": [
            {"label": "Nota Conocimiento", "name": "data/Inov_05_Nota_conocimiento.json" }
        ]
    },
    {
        "name": "Nota_Mercado",
        "files": [
            {"label": "Nota Mercado", "name": "data/Inov_06_Nota_Mercado.json" }
        ]
    },
    {
        "name": "Nota_Otros",
        "files": [
            {"label": "Nota Otros", "name": "data/Inov_07_Nota_otros_factores.json" }
        ]
    },
    {
        "name": "Innovación_Futura_a_2_años",
        "files": [
            {"label": "Innovación Futura a 2 años", "name": "data/Inov_08_Inn_futura2.json" }
        ]
    },
    {
        "name": "Instituciones_capacitación_formal_BIM_institución_carrera",
        "files": [
            {"label": "Instituciones con capacitación formal de BIM por tipo de institución y carrera", "name": "data/Inov_09_Bim_inst.json" }
        ]
    },
    {
        "name": "Instituciones_capacitación_formal_BIM_institución_region",
        "files": [
            {"label": "Instituciones con capacitación formal de BIM por tipo de institución y región", "name": "data/Inov_10_Bim_inst_region.json" }
        ]
    },
    {
        "name": "Num_Empr_adherentes_Seguro_Ley_Actividad_Economica",
        "files": [
            {"label": "Número de Empresas adherentes al Seguro Ley N°16.744, según Actividad Económica", "name": "data/Seg_01_Empresas_adherentes.json" }
        ]
    },
    {
        "name": "Trabajadores_protegidos_Seguro_Ley_Actividad_Económica",
        "files": [
            {"label": "Trabajadores protegidos por el Seguro Ley N°16.744, según Actividad Económica", "name": "data/Seg_02_Trabajadadores_protegidos.json" }
        ]
    },
    {
        "name": "Trabajadores_protegidos_sector_construcción_región",
        "files": [
            {"label": "Trabajadores protegidos del sector construcción por región", "name": "data/Seg_03_Trabajadadores_protegidos_porRegion.json" }
        ]
    },
    {
        "name": "Accidentes_Tasa_acc",
        "files": [
            {"label": "Accidentes y Tasa de acc por trabajo, trayecto y enferm. prof. y Tasa de mortalidad", "name": "data/Seg_04_Tasa_Accidentes.json" }
        ]
    },
    {
        "name": "CChC_IMACON_Variacion_Mensual",
        "files": [
            {"label": "IMACON Variación Mensual", "name": "data/Macro_10_IMACON_varMes.json" }
        ]
    },
    {
        "name": "CChC_IMACON_Variacion_Anual",
        "files": [
            {"label": "IMACON Variación Mensual", "name": "data/Macro_11_IMACON_varAnual.json" }
        ]
    },
    {
        "name": "CChC_INACOR_Variacion_Mensual",
        "files": [
            {"label": "INACOR Variación Mensual", "name": "data/Macro_12_INACOR_varMes.json" }
        ]
    },
    {
        "name": "CChC_INACOR_Variacion_Anual",
        "files": [
            {"label": "INACOR Variación Anual", "name": "data/Macro_13_INACOR_varAnual.json" }
        ]
    },
    {
        "name": "CChC_Ventas_Santiago",
        "files": [
            {"label": "Ventas Santiago", "name": "data/IH_04_venta_stgo.json" }
        ]
    },
    {
        "name": "CChC_Indice_Real_Precios_Vivienda_Santiago",
        "files": [
            {"label": "Índice Real de Precios de Vivienda Santiago", "name": "data/IH_05_Ind_precios_stgo.json" }
        ]
    },
    {
        "name": "CChC_materiales",
        "files": [
            {"label": "Venta de Materiales", "name": "data/cchc_01_materiales.json" }
        ]
    }
]
