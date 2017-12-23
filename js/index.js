$(document).ready(function(){
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
          $('.quote').html(data.quote)
          $('.author').html(data.author)
        }

      })

  }

  get_quote()
  
  $('#s').on('click',function(){
    get_quote()
  })
})
