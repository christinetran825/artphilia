$(document).ready(function() {
  getArtistIndex(); // .../artists
  getNewArtist()
})


/////// click on nav bar link for All Artists ///////
const getArtistIndex = () => {
  $('#artist_index').on('click', function(e){
    e.preventDefault();
    // history.pushState(null, null, "artists");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let theHeader = $(template).find(".header")
      let theTableHeader= $(template).find(".table thead tr")
      theIndexBody(theHeader, theTableHeader)
      getAllArtists()
    });
  })
}

///// ADD ALL Artists to the Table /////
function getAllArtists() {
  fetch(`/artists.json`)
   .then(res => res.json())
   .then(artists => {
     artists.forEach(artist => {
       // let numofArtworks = artist.artworks.length
       let newArtist = new Artist(artist); //create newArtist
       let theTableData = newArtist.formatArtistIndexData();
       tableContent(theTableData)
     })
   })
}

/////// click on "add new artist" button ///////
const getNewArtist = () => {
  $(document).on('click', "#add_artist", function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      debugger;
      let _template = response
      let template = $.parseHTML(_template)
      let theHeader = $(template).find(".header")
      let theForm = $(template).find("#new_artist")
      theNewEditBody(theHeader, theForm)
    })
  })
}
