import numpy as np


def coordDec2rad(coord):
    return coord * (np.pi / 180)


def deltaCoord(coord1, coord2):
    return np.abs(coord1 - coord2)


def distGeodesica(lat1, lon1, lat2, lon2):
    R = 6371  

 
    lat1_rad = coordDec2rad(lat1)
    lon1_rad = coordDec2rad(lon1)
    lat2_rad = coordDec2rad(lat2)
    lon2_rad = coordDec2rad(lon2)

 
    delta_lat = deltaCoord(lat1_rad, lat2_rad)
    delta_lon = deltaCoord(lon1_rad, lon2_rad)

    
    A = (np.sin(delta_lat / 2) ** 2 +
         np.cos(lat1_rad) * np.cos(lat2_rad) *
         (np.sin(delta_lon / 2) ** 2))

    
    B = 2 * np.arctan2(np.sqrt(A), np.sqrt(1 - A))

    
    D = B * R
    return D
