const watch = require('node-watch');
const path = require('path');

const {
  DATA_DIRECTORY,
  FACTOID_DATA_DIRECTORY
} = require('./config');
const DATA_PATH = path.resolve( __dirname, DATA_DIRECTORY );

const uploadToStorageProvider = name => {
  console.log(`Uploading ${name} to some provider`);
  console.log(`Upload OK`);
};

const reGzipExt = /[a-zA-Z0-9-]+\.tar\.gz$/;

const handleChange = ( evt, name ) => {
  if ( evt == 'update' ) {
    uploadToStorageProvider( name );
  }

  if (evt == 'remove') {
    console.log(`${name} removed`);
  }
};

watch(
  [
    DATA_PATH
  ],
  {
    recursive: true,
    filter: reGzipExt
  },
  handleChange
);

