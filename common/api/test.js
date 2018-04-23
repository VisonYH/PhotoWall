var files = require('./file')


files.getAllAlbums(function(err, allAlbums) {
  if(err){
    console.log('err');
    return;
  }
  console.log(allAlbums);
});