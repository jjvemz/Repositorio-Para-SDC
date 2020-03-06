from flask import jsonify

from flask_restful import Resource, reqparse

from flask_jwt_extended import (
    create_access_token, create_refresh_token, 
    jwt_required, get_jwt_identity, get_raw_jwt,
    set_access_cookies, set_refresh_cookies, unset_jwt_cookies
)

from .config.users import USERS

parser = reqparse.RequestParser()

parser.add_argument('username', help = 'Campo requerido', required = True)
parser.add_argument('password', help = 'Campo requerido', required = True)


class UserLogin(Resource):
    def post(self):
        data = parser.parse_args()
        logged_user = None
        access_token = None
        refresh_token = None

        error = 'Error de usuario o password'
        error_code = 1

        for user in USERS:
            if data['username'] == user['username'] and data['password'] == user['password']:
                logged_user = user
                error = ''
                error_code = 0

        if logged_user is not None:
            access_token = create_access_token(identity = logged_user['username'], fresh=True)
            refresh_token = create_refresh_token(identity = logged_user['username'])
            resp = jsonify({'login': True})
            set_access_cookies(resp, access_token)
            set_refresh_cookies(resp, refresh_token)
         
        return {
            'error': error, 
            'error_code': error_code,
            'access_token': access_token,
            'refresh_token': refresh_token
        }

    def patch(self):
        data = parser.parse_args()
        logged_user = None
        access_token = None
        refresh_token = None

        error = 'Error de usuario o password'
        error_code = 1

        for user in USERS:
            if data['username'] == user['username'] and data['password'] == user['password']:
                logged_user = user
                error = ''
                error_code = 0

        if logged_user is not None:
            access_token = create_access_token(identity = logged_user['username'], fresh=True)
            resp = jsonify({'login': True})
            set_access_cookies(resp, access_token)
         
        return {
            'error': error, 
            'error_code': error_code,
            'access_token': access_token
        }

    def delete(self):
        resp = jsonify({'login': False})
        unset_jwt_cookies(resp)
        return {
            'error': '', 
            'error_code': 0,
            'access_token': None,
            'refresh_token': None
        }
    
class AdminLogin(Resource):
    def post(self):
        data = parser.parse_args()
        logged_user = None
        access_token = None
        refresh_token = None

        error = 'Error de usuario o password'
        error_code = 1

        for user in USERS:
            if data['username'] == user['username'] and data['password'] == user['password'] and user['admin']:
                logged_user = user
                error = ''
                error_code = 0

        if logged_user is not None:
            access_token = create_access_token(identity = logged_user['username'], fresh=True)
            refresh_token = create_refresh_token(identity = logged_user['username'])
            resp = jsonify({'login': True})
            set_access_cookies(resp, access_token)
            set_refresh_cookies(resp, refresh_token)
         
        return {
            'error': error, 
            'error_code': error_code,
            'access_token': access_token,
            'refresh_token': refresh_token
        }

    def patch(self):
        data = parser.parse_args()
        logged_user = None
        access_token = None
        refresh_token = None

        error = 'Error de usuario o password'
        error_code = 1

        for user in USERS:
            if data['username'] == user['username'] and data['password'] == user['password'] and user['admin']:
                logged_user = user
                error = ''
                error_code = 0

        if logged_user is not None:
            access_token = create_access_token(identity = logged_user['username'], fresh=True)
            resp = jsonify({'login': True})
            set_access_cookies(resp, access_token)
         
        return {
            'error': error, 
            'error_code': error_code,
            'access_token': access_token
        }

    def delete(self):
        resp = jsonify({'login': False})
        unset_jwt_cookies(resp)
        return {
            'error': '', 
            'error_code': 0,
            'access_token': None,
            'refresh_token': None
        }
    