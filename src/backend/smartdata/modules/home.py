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

#@bp.route('/Contacts', methods=["GET","POST"])
#def Contacts():
    ##error = ''
    ##try:
    ##    if request.method == "POST":
    ##        name = request.form['name']
    ##        lastName = request.form['lastName']
    ##        mail = request.form['mail']
    ##        bussines = request.form['bussines']
##phone = request.form['phone']
    ##        rubro = request.form['rubro']
    ##        motivo = request.form['motivo']
    ##        message = request.form['message']
    ##        return render_template('index.html', title='App DEMO')
    ##    return render_template('index.html', title='App DEMO')
