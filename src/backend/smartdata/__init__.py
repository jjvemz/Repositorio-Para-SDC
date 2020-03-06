import os
from flask import Flask, render_template, jsonify
from flask_cors import CORS
from flask_restful import Api
from flask_jwt_extended import (
    JWTManager, jwt_refresh_token_required,
    set_access_cookies,
    get_jwt_identity, create_access_token
)

from .modules import home
from .modules.api.auth import UserLogin, AdminLogin
from .modules.api.dashboard import UserDashboard
from .modules.api.kpi import KpiDashboard
from .modules.api.admin import AdminFiles
from .modules.api.config.users import USERS

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        JWT_SECRET_KEY='jwt#!dev',
        JWT_ACCESS_COOKIE_PATH='/',
        JWT_REFRESH_COOKIE_PATH='/',
        JWT_ACCESS_COOKIE_NAME='jwt_smartdata',
        JWT_TOKEN_LOCATION=['headers', 'cookies'],
        API_PATH='/api/v1',
        PROPAGATE_EXCEPTIONS = True,
    )

    CORS(app, resources={r"/api/*": {"origins": "*"}})
    jwt = JWTManager(app)

    # @jwt.user_claims_loader
    # def add_claims_to_access_token(user):
    #     return {'is_admin': user['admin']}

    # @jwt.user_identity_loader
    # def user_identity_lookup(user):
    #     return user['username']

    @jwt.expired_token_loader
    def token_expired(exp):
        print("Sesion expirada")
        return jsonify({
            'error': 'Ha vencido tu sesion',
            'error_code': 401
        }), 401

    @app.route(app.config['API_PATH'] + '/auth/admin', methods=['PUT'])
    @jwt_refresh_token_required
    def session_refresh():
        logged_user = get_jwt_identity()
        access_token = None
        error = 'Error de usuario o password'
        error_code = 1

        for user in USERS:
            if logged_user == user['username'] and user['admin']:
                access_token = create_access_token(identity = logged_user, fresh=False)
                resp = jsonify({'login': True})
                set_access_cookies(resp, access_token)
                error = None
                error_code = 0

        return jsonify({
            'error': error,
            'error_code': error_code,
            'access_token': access_token
        })

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    api = Api(app)

    app.register_blueprint(home.bp)

    api.add_resource(UserDashboard, app.config['API_PATH'] + '/dashboard')
    api.add_resource(UserLogin, app.config['API_PATH'] + '/auth/login')
    api.add_resource(AdminLogin, app.config['API_PATH'] + '/auth/admin')
    api.add_resource(KpiDashboard, app.config['API_PATH'] + '/kpi/<kpi_name>')
    api.add_resource(AdminFiles, app.config['API_PATH'] + '/admin/files')

    return app

app = create_app()
