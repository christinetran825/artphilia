$(document).ready(function() {
  getArtistIndex(); // .../artists
  getNewArtist();
  getEditArtist();
  postNewArtist();
  postEditArtist();
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
      const _template = response
      const template = $.parseHTML(_template)
      const theHeader = $(template).find(".header")
      const theTableHeader = $(template).find(".table thead tr")
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
       const numofArtworks = artist.artworks.length
       const newArtist = new Artist(artist); //create newArtist
       const theTableData = newArtist.formatArtistIndexData(numofArtworks);
       tableContent(`<tr>${theTableData}</tr>`);
     })
   })
   .then(() => deleteArtist())
}

/////// click on "add new artist" button ///////
const getNewArtist = () => {
  $(document).on('click', "#add_artist", function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      const _template = response
      const template = $.parseHTML(_template)
      const theHeader = $(template).find(".header")
      const theForm = $(template).find("#new_artist")
      theNewEditBody(theHeader, theForm)
    })
  })
}

const getEditArtist = () => {
  $(document).on('click', "#update_artist", function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      const _template = response
      const template = $.parseHTML(_template)
      const theHeader = $(template).find(".header")
      const theForm = $(template).find(".edit_artist")
      theNewEditBody(theHeader, theForm)
    })
  })
}

const postNewArtist = () => {
  $(document).on('submit', "form#new_artist", function(e){
    e.preventDefault();
    const $form = $(this);
    postingArtistAjax($form)
  })
}

const postEditArtist = () => {
  $(document).on('submit', "form.edit_artist", function(e){
    e.preventDefault();
    const $form = $(this);
    postingArtistAjax($form)
  })
}

function postingArtistAjax($form){
  const action = $form.attr("action");
  const data = $form.serialize();
  $.ajax({
    type: "POST",
    url: action,
    data: data,
    success: function(data){
      const theHeader = $(data).find("#the_artists");
      const getButton = $(data).find("#update_artist");
      const getButtonId = getButton.attr("data-id");
      artistShow(getButtonId)
    },
    error: function(){
      alert("Hm... something didn't work.");
    }
  })
}

//Artist's Show; Click on artist's first or last name; redirect to Artist's Show //
const clickOnArtist = () => {
  $(document).on('click', '.artist_show_link', function(e){
    e.preventDefault();
    const artistId = $(this).attr("data-id");
    artistShow(artistId)
  })
}

function artistShow(theID){
  fetch(`/artists/${theID}.json`)
   .then(res => res.json())
   .then(artist => {
     const newArtist = new Artist(artist);
     const theHeader = newArtist.formatArtistShowHeader();
     theShowBody(theHeader)
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

///// delete artist /////
const deleteArtist = () => {
  $("#delete_artist").on('click', function(e){
    e.preventDefault();
    const $form = $(this);
    const action = $form.attr("href");
    $.ajax({
      type: "POST",
      url: action,
      data: {_method: 'delete'},
      beforeSend: function(){
        const r = confirm('Are you sure you want to delete this Artist?');
        if (r == true) {
            alert("The Artist was Removed.")
        } else {
            alert('Oops! Looks like something went wrong.');
        }
      },
      success: function (data) {
        // alert("The Artist was Removed.")
        theBodyPage() //need to update
      },
      error: function (data) {
        // alert('Oops! Looks like something went wrong.');
      }
    });
  })
}
