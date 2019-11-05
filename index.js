const watch = require('node-watch');

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
    './data'
  ],
  {
    recursive: true,
    filter: reGzipExt
  },
  handleChange
);

