$(document).ready(function() {
  $.ajax({
    url: 'https://api.instagram.com/v1/tags/hackney/media/recent?client_id=89cc7d4644154c718cc5fb612e5da3cb;count=5', 
    method: 'GET',
    dataType: 'jsonp',
    success: function(data) {
      var response = data;
      var imageArray = $.map(response, function(el) { return el; });
      var image = imageArray[imageArray.indexOf('url')]
      console.log(image);
    }
  })
});