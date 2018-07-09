$(document).ready(function() {
  favoriteArtists(); // .../artists
})

/////// click on nav bar link for Favorite Artists ///////
const favoriteArtists = () => {
  $(document).on('click', '#fav_artists', function(e){
    getRouteResponse(e, this)
  });
}

/////// ADD FAV ARTIST using filter function ///////
function addFavArtistsByRating() {
  fetch(`/artists.json`)
  .then(res => res.json())
  .then(favArtists => {
   const artistsRatingFive = favArtists.filter(artist => artist.rating === 5)
   artistsRatingFive.forEach(artist => {
     const numofArtworks = artist.artworks.length
     const theFavArtist = new Artist(artist); //create newArtist
     const eachFavArtists = theFavArtist.formatFavArtistIndexData(numofArtworks);
     tableContent(eachFavArtists)
   });
  })
}
