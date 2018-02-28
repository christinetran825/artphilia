$(document).ready(function() {
  artworksOwned(); // .../artists
})

/////// click on nav bar link for owned Artwork ///////
const artworksOwned = () => {
  $(document).on('click', '#owned_artworks', function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let theHeader = $(template).find(".header")
      let theTableHeader= $(template).find(".table thead tr")
      theIndexBody(theHeader, theTableHeader)
    });
    addArtworksOwnedByYes(this)
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
function addArtworksOwnedByYes(allArtworks) {
  fetch(`/artists.json`)
  .then(res => res.json())
  .then(theArtists => {
    theArtists.forEach(artist => {
     debugger;
     let theArtworks = artist.artworks
     const whichArtworkOwned = filterOwnership(theArtworks, function(artworks){
       return artworks.user_owned === "Yes"
     });
     debugger;
     whichArtworkOwned.forEach(artwork => {
       let theOwnedArtwork = new Artwork(artwork); //create newArtwork
       let theOwnedArtworkArtist = artwork.artist_id
       let eachOwnedArtwork = theOwnedArtwork.formatArtworkOwnedData(theOwnedArtworkArtist);
       tableContent(eachOwnedArtwork)
     });
    })
  })
}
