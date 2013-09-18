$(function(){

  $('#searchtxt').focus(function(){
      var full = $("#page_three").has("img").length ? true : false;
      if(full == 'false'){
         $('#page_three').empty();
      }
  });


$("input").empty();
$("button").click(function(){ 
    search();



 });

  function search() {
        $.ajax({
            url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
            dataType: 'jsonp',
            data: {
                q: $("input").val(),
                apiKey: 'txkk8d53p6vt7twxqvb8p7ub'
            },
            success: showList
        });

     }
    function showList(response) {
        console.log('response', response);
        var movies = response.movies;
        $('#muby').replaceWith('<ul id="muby"></ul>');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            /**$('#page_three').append('<h3>' + movie.title + '</h3>');**/

            $('#muby').append(
              '<div id = "imgdiv"><div id="post1"><img id = "thumb" src="' + movie.posters.original + '" /></div><h3 id = "txt"> '+ movie.title +' </h3><p>Year: '+ movie.year +'</p><p>Ratings: '+ movie.ratings.audience_score +'</p><p id="syno">SYNOPSIS: '+ movie.synopsis +'</p></div><br>');
            
           

            
        }
    }

         
});