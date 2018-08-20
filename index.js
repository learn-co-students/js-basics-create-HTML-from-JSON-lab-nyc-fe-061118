$(document).ready(function() {
  //make a request for teh movies JSON
  //find the movie that is titanic
  //put the info about titanic on the package
  $("#title").html(movies.Titanic.title);
  $('#director').html(movies.Titanic.director);
  $('#genre').html(movies.Titanic.genre);
  $('#filmRating').html(movies.Titanic.filmRating);
  $('#description').html(movies.Titanic.description);
  $('#audienceScore').html(movies.Titanic.audienceScore);
  debugger;
  putCastMembersonPage()
  putTerminatorOnPage()
  // movies.forEach(function(movie) {
  //   debugger;
  //   movie.cast.forEach(function(castMember) {
  //     debugger;
  // $(`#cast`).append(castMember.role)
  // })
  // $('#reviews').html(movies.Titanic.reviews);
  // $('#poster').html(movies.Titanic.poster);
  // $('#Terminator-2').on("click", function() {
  //   $('#title').html(movies.Terminator2.title);
  //   $('#director').html(movies.Terminator2.director);
  //   $('#genre').html(movies.Terminator2.genre);
  //   $('#filmRating').html(movies.Terminator2.filmRating);
  //   $('#description').html(movies.Terminator2.description);
  //   $('#audienceScore').html(movies.Terminator2.audienceScore);
  //   $('#cast').html(movies.Terminator2.cast);
  //   $('#reviews').html(movies.Terminator2.reviews);
  // })
// })
})

function putCastMembersonPage() {
   movies.Titanic.cast.forEach(function(castMember) {
    $(`#cast`).append(`<li>${castMember.actor}</li>`)
  })
}

function putTerminatorOnPage() {
  $("#terminator").on("click", function() {
    appendCastmembers(movieTitle)
  })
}

function appendCastmembers(movieTitle) {
   movies[movieTitle]cast.forEach(function(castMember) {
      $(`#cast`).append(`<li>${castMember.actor}</li>`)
    })
}








