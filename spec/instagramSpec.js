var api = require('hippie');

api()
  .header('User-Agent', 'hippie')
  .json()
  .get('https://api.github.com/users/bebbs')
  .expectStatus(200)
  .end(function(err, res, body) {
    if (err) {
      throw err 
    } else {
      console.log('Test passed');
    }
  });