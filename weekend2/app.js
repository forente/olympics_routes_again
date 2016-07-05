$(function(){
  // $('form').empty();
  $('.randomGIF').on('click', function(event){
    $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(function(data){
        console.log(data);
        var image = data.data.image_url;
        // console.log(data.data.image_url);
        $('.container1').empty();
        $('.container1').append('<div><img src="' + image + '"></div>');
      })
    })
    $('.randomSticker').on('click', function(event){
      $.get('http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC')
        .then(function(data){
          // console.log(data);
          var image = data.data.image_url;
          // console.log(data.data.image_url);
          $('.container2').empty();
          $('.container2').append('<div><img src="' + image + '"></div>');
        })
    })
    // $('.trendingGif').on('click', function(event){
    //   $.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //     .then(function(data){
    //       console.log(data);
    //       console.log(data.data[0].url)
    //       var image = data.data[0].url;
    //       // console.log(data.data.image_url);
    //       $('.container3').empty();
    //       $('.container3').append('<div><img src="' + image + '"></div>');
    //     })
    //   })
})
