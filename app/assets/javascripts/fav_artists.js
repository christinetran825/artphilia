$(document).ready(function() {
  favoriteArtists(); // .../artists
})

/////// click on nav bar link for Favorite Artists ///////
const favoriteArtists = () => {
  $(document).on('click', '#fav_artists', function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let theHeader = $(template).find(".header")
      let theTableHeader= $(template).find(".table thead tr")
      theIndexBody(theHeader, theTableHeader)
      addFavArtistsByRating()
    });
  });
}

/////// DEFINE ARTIST Filter for fav artist ///////
function filterRatings(collection, cb){
  const favoriteArtists = [];
  for (const element of collection){
    if (cb(element)){
      favoriteArtists.push(element);
    }
  }
  return favoriteArtists;
}

/////// ADD FAV ARTIST using filter function ///////
function addFavArtistsByRating() {
  fetch(`/artists.json`)
  .then(res => res.json())
  .then(favArtists => {
   const artistsRatingFive = filterRatings(favArtists, function(artist){
     return artist.rating === 5
   });
   artistsRatingFive.forEach(artist => {
     // let numofArtworks = artist.artworks.length
     let theFavArtist = new Artist(artist); //create newArtist
     let eachFavArtists = theFavArtist.formatFavArtistIndexData();
     tableContent(eachFavArtists)
   });
  })
}
