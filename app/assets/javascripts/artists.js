$(document).ready(function() {
  getArtistIndex(); // .../artists
  getNewArtist();
  getEditArtist();
  clickOnArtist();
  showAllArtworks()
})


/////// click on nav bar link for All Artists ///////
const getArtistIndex = () => {
  $(document).on('click', '#artist_index', function(e){
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
      let _template = response
      let template = $.parseHTML(_template)
      let theHeader = $(template).find(".header")
      let theForm = $(template).find("#new_artist")
      theNewEditBody(theHeader, theForm)
    })
  })
}

const getEditArtist = () => {
  $(document).on('click', "#update_artist", function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let theHeader = $(template).find(".header")
      let theForm = $(template).find(".edit_artist")
      theNewEditBody(theHeader, theForm)
    })
  })
}

//Artist's Show; Click on artist's first or last name; redirect to Artist's Show //
const clickOnArtist = () => {
  $(document).on('click', '.artist_show_link', function(e){
    e.preventDefault();
    artistShow(this) //inject the Artist Show page
    showAllArtworks()
  })
}

// pass the clicked Artist's ID; fetch its json to parse the objects
function artistShow(theClickedArtist){
  let id = $(theClickedArtist).attr('data-id');
  fetch(`/artists/${id}.json`)
   .then(res => res.json())
   .then(artist => {
     let theArtworks = artist.artworks;
     // let numofArtworks = artist.artworks.length;
     let newArtist = new Artist(artist);
     let heading = newArtist.formatArtistShowHeading();
     let attr = newArtist.formatArtistShowHeaderAttr();
     let links = newArtist.formatArtistShowButtons();
     theShowBody(heading, attr, links)
   })
}

const showAllArtworks = () => {
  $(document).on('click', "a#load_artworks", function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      addShowContents(response)
    })
  })
}
