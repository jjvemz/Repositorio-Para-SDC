# Smartdata Construcción
Considerando que la industria de la construcción es una de las menos digitalizadas de toda la economía (McKinsey Global Institute 2015), CTeC ha involucrado importantes recursos en desarrollar una plataforma tecnológica, que consolide datos  actualizados, levantados y procesados desde diversas fuentes públicas y privadas, que permitan generar indicadores relevantes de sustentabilidad y productividad de la industria de la construcción en Chile. Esta plataforma, facilitará el análisis, respaldando la toma de decisiones, permitiendo la resolución de problemas y visualizando oportunidades antes no percibidas. De este modo, CTeC crea “SmartData Construcción” que tiene entre sus objetivos:

Centralizar y vincular información que permita visualizar el comportamiento de la industria de la construcción nacional.
Brindar respuestas rápidas a consultas en torno a productividad y sustentabilidad.
Facilitar el análisis, interpretación y conclusiones relevantes, mediante herramientas de visualización, ayudando a la toma de decisiones estratégicas de empresas partícipes del sector o potenciales entrantes.
Apoyar el desarrollo de políticas públicas orientadas a mejorar la productividad y la sustentabilidad de la industria de la construcción.
Los atributos de SmartData Construcción están orientados a la calidad de los datos, la confianza en sus fuentes y tratamiento, visualizaciones interactivas de información agregada, veraz, efectiva y de forma eficiente. Se trabajará en desafíos de crecimiento, donde la colaboración, interoperabilidad, veracidad y efectividad, serán piezas claves, que ayudarán a potenciar estándares y metodologías, para una transformación digital sostenible y escalable.

## Documentación


### Para lanzar Backend en LOCAL:

* Se debe contar con Node y Yarn instalados
* Se debe contar con VirtualEnv (u otro gestor de ambientes Python)
* En la siguiente ruta crear el ambiente virtual:
´´´
cd src/backend
virtualenv venv
´´´
* Activar el ambiente virtual e instalar paquetes locales
´´´
source ./venv/bin/activate
pip install -r requirements.txt
´´´

* Lanzar backend, se lanzará en puerto 8000
´´´
yarn start:dev
´´´

### Para lanzar Backend en LOCAL:

* Se debe contar con Node y Yarn instalados
* Instalar paquetes frontend
´´´
cd src/frontend
yarn install
´´´

* Lanzar aplicación front, se lanzará en puerto 3010
´´´
yarn start
´´´
* Se abrirá el navegador por defecto, en caso contrario acceder a:
´´´
http://localhost:3010
´´´

# Al realizar cambios en Frontend, se actualizará la página.