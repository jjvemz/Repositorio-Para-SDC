const API_PATH = '/api/v1'
const API_ACCESS_KEY = 'smartdata_access'

const LOAD_STATE = {LOADING: 'cargando', LOADED: 'cargado', ERROR: 'error'}

var DATA_ALL = {}
var DATA_CNT = {}

const loadFiles = (kpi_name, data_base_path, files_array, cb) => {
    let _file = files_array.shift()
    let _dt = new Date().valueOf()
    fetch(`${data_base_path}${_file.name}?dt=${_dt}`,
        {
            'Content-Type': 'plain/text'
        }
    )
    .then(response => response.json())
    .then(data => {
        if (files_array.length) {
            loadFiles(kpi_name, data_base_path, files_array, cb)
        }
        DATA_CNT[kpi_name]--
        DATA_ALL[kpi_name][_file.label] = data
        return cb()
    })
    .catch(error => {
        console.log(error)
        return null
    })

}

const getKpiData = (kpi_name)=>{
    DATA_ALL[kpi_name] = []
    DATA_CNT[kpi_name] = 0

    return new Promise((resolve, reject)=>{

        let _dt = new Date().valueOf()
        const path = `${API_PATH}/kpi/${kpi_name}?dt=${_dt}`;
        console.log('path: ', path);
        fetch(path, {
            method: 'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Error al consultar Kpi')
            }
            return response.json()
        })
        .then(data => {
            if (data.error_code) {
                throw new Error('Error en datos de Kpi')
            } else {
                let files_array = data.data_files.files
                DATA_CNT[kpi_name] = files_array.length

                loadFiles(kpi_name, data.data_base_path, files_array, () => {
                    if (DATA_CNT[kpi_name] === 0) {
                        resolve(DATA_ALL[kpi_name])
                    }
                })
            }
        })
        .catch(error => {
            reject(error)
        })

    })
}

export {
    API_PATH,
    API_ACCESS_KEY,
    LOAD_STATE,
    getKpiData,
}
