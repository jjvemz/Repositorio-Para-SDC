#!/usr/bin/env python3
import pandas as pd
from geopy.geocoders import Bing
import csv  
import json   

import warnings
warnings.filterwarnings('ignore')

bing_key = 'ginITT5ALcrOnA4aMoH0~_vGQBu-_tnKr6FYRj6U5nA~Ar9conblprRVoeaB4uH4PKMzcs0BfrUJ5LbspSyDn04UqCpCOfsm567DJjUw-PY6'

def get_geocode(row):
    geolocator = Bing(bing_key, timeout=7)
    location = geolocator.geocode(row)
    if location is None:
        print("NOT FOUND")
        return "NOT FOUND"
    else:
        if location.raw["address"]["countryRegion"] == "Chile":
            r = str(location.latitude) + ", " + str(location.longitude)
            print(r)
            return r
        else:
            print("MISFORMED")
            return "MISFORMED"

def reporte(tabla):
    
    a = pd.read_excel(tabla,sheet_name=1,skiprows=2)
    b = a.copy()
    
    c = b[(b['ProjectName'] != 'Confidential') & (b['Street'].notnull())]
    c['Pais'] = 'Chile'
    c['direccion'] = c[['Street', 'City', 'State', 'Pais']].apply(lambda x: ', '.join(x), axis=1)    
    
    # Geocoding #
    c['Coordenadas'] = c['direccion'].apply(get_geocode)

    # Lat and Lon
    lat = lambda row: row.split(',')[0].strip()
    lon = lambda row: row.split(',')[-1].strip()
    c['lat'] = c['Coordenadas'].map(lat)
    c['lon'] = c['Coordenadas'].map(lon)
    c.drop(labels=['Coordenadas'],axis=1,inplace=True)

    # Save to CSV
    n = 'coor_' + tabla.split('.')[0] + '.csv'
    c.to_csv(n, sep=',', encoding='utf-8')

    # Open the CSV  
    f = open(n, 'rU')  
    # Change each fieldname to the appropriate field name. I know, so difficult.  
    reader = csv.DictReader(f, fieldnames = ('ID','Isconfidential','ProjectName','Street','City','State','Zipcode','Country','LEEDSystemVersionDisplayName','Sistema','PointsAchieved','CertLevel','CertDate','Mes certificación','Año' 'certificación','IsCertified','OwnerTypes','GrossSqFoot','mt2','TotalPropArea','ProjectTypes','Categoría','OwnerOrganization','RegistrationDate','Mes registro','Año registro','Pais','direccion','lat','lon'))  
    
    # Parse the CSV into JSON  
    out = json.dumps( [ row for row in reader ] )  
    print("JSON parsed!")  
    
    # Save the JSON  
    f = open( 'parsed.json', 'w')  
    f.write(out)  
    
    print("JSON saved!") 



reporte('LEED.xlsx')
