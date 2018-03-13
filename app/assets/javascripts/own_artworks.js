$(document).ready(function() {
  artworksOwned();
  getEditOwnedArtwork();
})

/////// click on nav bar link for owned Artwork ///////
const artworksOwned = () => {
  $(document).on('click', '#owned_artworks', function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      const _template = response
      const template = $.parseHTML(_template)
      const theHeader = $(template).find(".header")
      const theTableHeader= $(template).find(".table thead tr")
      theIndexBody(theHeader, theTableHeader)
      addArtworksOwnedByYes()
    });
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
    const artistId = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      const _template = response
      const template = $.parseHTML(_template)
      const heading = `<h4>Edit the Artwork</h4>`
      const cancelButton = ownedArtworkFormCancelButton(artistId)
      const theForm = $(template).find(".edit_artwork")
      buildArtworkNewEditBody(heading, cancelButton, theForm)
    })
  });
}

function ownedArtworkFormCancelButton(artistId){
  const cancelButton =
    `<button><a href="/artworks/ownerships">Cancel</a></button>`
  return cancelButton
}
