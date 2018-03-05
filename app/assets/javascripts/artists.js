$(document).ready(function() {
  getArtistIndex(); // .../artists
  getNewArtist();
  getEditArtist();
  postNewArtist();
  clickOnArtist();
  showAllArtworks();
  deleteArtist();
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
       let numofArtworks = artist.artworks.length
       let newArtist = new Artist(artist); //create newArtist
       let theTableData = newArtist.formatArtistIndexData(numofArtworks);
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

const postNewArtist = () => {
  $(document).on('submit', "form#new_artist", function(e){
    e.preventDefault();
    let $form = $(this);
    let action = $form.attr("action");
    let data = $form.serialize();
    $.ajax({
      type: "POST",
      url: action,
      data: data,
      // datatype: 'json',
      success: function(data){
        let artistLink = $(data).find("#delete_artist")
        artistShow(artistLink)
      },
      error: function(){
        alert("Hm... something didn't work.");
      }
    })
  })
}

///// delete artist /////
const deleteArtist = () => {
  $(document).on('click', "#delete_artist", function(e){
    debugger;
    e.preventDefault();
    let x = $(this);
    //this.name
    // if (confirm("Are you sure you want to delete `#{a.name}`??")) {
    //   debugger;
    //   $('div').remove('#item1');
    // }
    // $.ajax({
    //     url:route,
    //     type: 'post',
    //     data: {_method: 'delete'},
    //     success: function(msg){
    //       alert("hi")
    //     },
    //     error: function(){
    //       alert("nope")
    //     }
    // })
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
  let artistLink = $(theClickedArtist).attr('href');
  fetch(`${artistLink}.json`)
   .then(res => res.json())
   .then(artist => {
     let newArtist = new Artist(artist);
     let theHeader = newArtist.formatArtistShowHeader();
     objShowBody(theHeader)
   })
}

/// Option A
const showAllArtworks = () => {
  $(document).on('click', "a#load_artworks", function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      addContents(response)
    })
  })
}
