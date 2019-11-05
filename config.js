
import _ from 'lodash';

const env = ( key, defaultVal ) => {
  if( process.env[key] != null ){
    let val =  process.env[key];

    if( _.isInteger( defaultVal ) ){
      val = parseInt( val );
    }
    else if( _.isBoolean( defaultVal ) ){
      val = JSON.parse( val );
    }

    return val;
  } else {
    return defaultVal;
  }
};

// Data directories
export const DATA_DIRECTORY = env('DATA_DIRECTORY', 'data');
export const FACTOID_DATA_DIRECTORY = env('FACTOID_DATA_DIRECTORY', 'factoid');

// Storage providers
export const DROPBOX_ACCESS_TOKEN = env('DROPBOX_ACCESS_TOKEN', '');
