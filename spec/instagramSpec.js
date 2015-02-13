var hippie = require('hippie');
var server = hippie;
var instagram = hippie;

instagram()
  .header('User-Agent', 'hippie')
  .json()
  .get('https://api.instagram.com/v1/tags/hackney/media/recent?client_id=89cc7d4644154c718cc5fb612e5da3cb')
  .expectStatus(200)
  .end(function(err, res, body) {
    if (err) {
      throw err 
    } else {
      console.log('Instagram API will return one image');
    }
  });

instagram()
  .header('User-Agent', 'hippie')
  .json()
  .get('https://api.instagram.com/v1/tags/hackney/media/recent?client_id=89cc7d4644154c718cc5fb612e5da3cb;count=10')
  .expectValue('recent?count=10')
  .end(function(err, res, body) {
    if (err) {
      throw err
    } else {
      console.log('Instagram API will return multiple images');
    }
  });