from sys import getsizeof
from werkzeug.datastructures import FileStorage
import time

from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, fresh_jwt_required,
    get_jwt_identity, get_raw_jwt
)

from .config.files import DATA_FILES, DATA_S3_PATH
from .config.utils import s3Upload

parser = reqparse.RequestParser()

class AdminFiles(Resource):
    @jwt_required
    def get(self):
        error = ''
        error_code = 0

        return {
            'error': error,
            'error_code': error_code,
            'data_files': DATA_FILES
        }

    @jwt_required
    def post(self):
        error = ''
        error_code = 0
        upload_error = False

        parser.add_argument('kpi_name', location='form')
        parser.add_argument('kpi_field', location='form', action='append')
        parser.add_argument('kpi_file', type=FileStorage, location='files', action='append')
        data = parser.parse_args()

        kpi_files = data['kpi_file']

        for idx,kpi_file_to_save in enumerate(data['kpi_field']):
            back_file = '{}-{}'.format(kpi_file_to_save, time.time())
            kpi_file = kpi_files[idx]
            kpi_file_content = kpi_file.read()

            if s3Upload(back_file, kpi_file_content) is False:
                error = 'Error al subir archivos'
                error_code = 1

            if s3Upload(kpi_file_to_save, kpi_file_content) is False:
                error = 'Error al subir archivos'
                error_code = 1

        return {
            'error': error, 
            'error_code': error_code,
            'data_base_path': DATA_S3_PATH
        }
