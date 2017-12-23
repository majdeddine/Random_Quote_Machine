$(document).ready(function(){
  $.ajax({
    headers: {
      "X-Mashape-Key": config.KEY,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(data) {
      console.log(data)
      }

    })
})
