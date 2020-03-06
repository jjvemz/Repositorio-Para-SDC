from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, fresh_jwt_required,
    get_jwt_identity, get_raw_jwt
)

from .config.files import DATA_FILES, DATA_S3_PATH

parser = reqparse.RequestParser()

parser.add_argument('dt', help = 'Campo requerido', required = True, location = 'args')

class KpiDashboard(Resource):
    # @fresh_jwt_required
    def get(self, kpi_name):
        data = parser.parse_args()
        access_token = None
        refresh_token = None
        data_files = None

        error = 'Error de petición'
        error_code = 1

        if data['dt'] is not None:
            error = ''
            error_code = 0
            for df in DATA_FILES:
                if df.get('name', None).upper() == kpi_name.upper():
                    data_files = df
         
        return {
            'error': error, 
            'error_code': error_code,
            'data_files': data_files,
            'data_base_path': DATA_S3_PATH,
        }
