from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, 
    get_jwt_identity, get_raw_jwt
)

class UserDashboard(Resource):
    @jwt_required
    def get(self):
        access_token = None
        refresh_token = None

        error = ''
        error_code = 0

        return {
            'error': error, 
            'error_code': error_code,
            'data': [
                {"id": 10}
            ]
        }
