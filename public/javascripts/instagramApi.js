// var  {
//   $.ajax({
//     url: 'https://api.instagram.com/v1/tags/hackney/media/recent?client_id=89cc7d4644154c718cc5fb612e5da3cb;count=5', 
//     method: 'GET',
//     dataType: 'jsonp',
//     success: function(data) {
//       var imageArray = data.data;
//       var urls = [];
//       for(i in imageArray) {
//         urls.push(imageArray[i].images.thumbnail.url)
//       }
//       var newImages = Mustache.render($('#instagram-images').html(), urls);
//       console.log(urls);
//       $(newImages).appendTo('.image-container');
//       $('#imageOne').attr("src", urls[0]);
//       $('#imageTwo').attr("src", urls[1]);
//       $('#imageThree').attr("src", urls[2]);
//       $('#imageFour').attr("src", urls[3]);
//     }
//   })
// });