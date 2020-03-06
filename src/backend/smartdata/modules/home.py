import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)

bp = Blueprint('home', __name__, url_prefix='/')

@bp.route("/")
def home():
  return render_template('index.html', title='App DEMO')

@bp.route("/dashboard")
def dashboard():
  return render_template('index.html', title='App DEMO')

@bp.route("/dashboard-panel")
def dashboard_panel():
  return render_template('index.html', title='App DEMO')

@bp.route("/admin")
def admin():
  return render_template('index.html', title='App DEMO')

@bp.route("/admin-panel")
def admin_panel():
  return render_template('index.html', title='App DEMO')

@bp.route('/<path:path>')
def catch_all(path):
  return render_template('index.html', title='App DEMO')

@bp.route('/Contacts')
def Contacts():
    return render_template('index.html', title='App DEMO')
