$(document).ready(function(){
  $(".twitter-share-button").attr('data-text', `{data.quote}`)
  function get_quote(){
    $.ajax({
      headers: {
        "X-Mashape-Key": config.KEY,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(d) {
          var data = JSON.parse(d)
          $(".twitter-share-button").attr('href', `https://twitter.com/intent/tweet?text=${data.quote}`)
          $(".twitter-share-button").attr('data-hashtags', data.author)
          $('.quote').html(data.quote)
          $('.author').html(data.author)
          console.log($(".twitter-share-button").attr('data-text'))
        }
      })
  }

  get_quote()

  $('.new-quote-btn').on('click',function(){
    get_quote()
  })

})
