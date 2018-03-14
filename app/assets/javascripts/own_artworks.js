$(document).ready(function() {
  artworksOwned();
  getEditOwnedArtwork();
})

/////// click on nav bar link for owned Artwork ///////
const artworksOwned = () => {
  $(document).on('click', '#owned_artworks', function(e){
    getRouteResponse(e, this);
  });
}

/////// DEFINE ARTWORK Filter for owned artwork ///////
function filterOwnership(collection, cb){
  const artworksHave = [];
  for (const element of collection){
    if (cb(element)){
      artworksHave.push(element);
    }
  }
  return artworksHave;
}

/////// ADD OWNED ARTWORKS using filter function ///////
function addArtworksOwnedByYes() {
  fetch(`/artists.json`)
  .then(res => res.json())
  .then(theArtists => {
    theArtists.forEach(artist => {
     const theArtistName = artist.name
     const theArtworks = artist.artworks
     const whichArtworkOwned = filterOwnership(theArtworks, function(artworks){
       return artworks.user_owned === "Yes"
     });
     whichArtworkOwned.forEach(artwork => {
       const theOwnedArtwork = new Artwork(artwork); //create newArtwork
       const theOwnedArtworkArtist = artwork.artist_id
       const eachOwnedArtwork = theOwnedArtwork.formatArtworkOwnedData(theArtistName, theOwnedArtworkArtist);
       tableContent(eachOwnedArtwork)
     });
    })
  })
}

const getEditOwnedArtwork = () => {
  $(document).on('click', "#update_owned_artwork", function(e){
    e.preventDefault();
    getFormAndResponses(e, this)
  });
}
