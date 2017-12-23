$(document).ready(function(){
  $.getJSON("https://quotesondesign.com/wp-json/posts?", function(a) {
  $("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
});
})
