$(document).ready(function() {
  getArtistIndex(); // .../artists
  getNewArtist();
  getEditArtist();
  postNewArtist();
  postEditArtist();
  clickOnArtist();
  showAllArtworks();
  deleteArtist();
  sortArtistAttr()
})


/////// click on nav bar link for All Artists ///////
const getArtistIndex = () => {
  $(document).on('click', '#artist_index', function(e){
    getRouteResponse(e, this);
  })
}

function compare(a,b) {
  return b.rating > a.rating
}

const sortArtistAttr = () => {
  $("#obj_sort_attr").on('click', function(e){
    e.preventDefault();
    fetch(`/artists.json`)
     .then(res => res.json())
     .then(artists => {
       $("tbody").empty()
       const sortedArtists = artists.sort(compare)
       sortedArtists.forEach(artist => {
         const numofArtworks = artist.artworks.length;
         const newArtist = new Artist(artist);
         const sortedRating = newArtist.formatArtistIndexData(numofArtworks);
         tableContent(`${sortedRating}`)
       })
     })
  })
}


///// ADD ALL Artists to the Table /////
function getAllArtists() {
  fetch(`/artists.json`)
   .then(res => res.json())
   .then(artists => {
     artists.forEach(artist => {
       const numofArtworks = artist.artworks.length;
       const newArtist = new Artist(artist);
       const theTableData = newArtist.formatArtistIndexData(numofArtworks);
       console.log(theTableData)
       tableContent(`${theTableData}`);
     })
   })
   .then(() => sortArtistAttr())
   .then(() => deleteArtist());
}

/////// click on "add new artist" button ///////
const getNewArtist = () => {
  $(document).on('click', "#add_artist", function(e){
    getFormAndResponses(e, this);
  })
}

const getEditArtist = () => {
  $(document).on('click', "#update_artist", function(e){
    getFormAndResponses(e, this);
  })
}

const postNewArtist = () => {
  $(document).on('submit', "form#new_artist", function(e){
    e.preventDefault();
    postingArtistAjax(this);
  })
}

const postEditArtist = () => {
  $(document).on('submit', "form.edit_artist", function(e){
    e.preventDefault();
    postingArtistAjax(this);
  })
}

function postingArtistAjax(theSubmission){
  const $form = $(theSubmission);
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
    artistShow(artistId);
  })
}

function artistShow(artistId){
  fetch(`/artists/${artistId}.json`)
   .then(res => res.json())
   .then(artist => {
     const newArtist = new Artist(artist);
     const theHeader = newArtist.formatArtistShowHeader();
     theShowBody(theHeader);
   })
}

const showAllArtworks = () => {
  $(document).on('click', "a#load_artworks", function(e){
    getRouteResponse(e, this);
  })
}

///// ADD ALL Artworks to the Artists Show /////
function getAllArtistArtworks(artistId) {
  fetch(`/artists/${artistId}/artworks.json`)
   .then(res => res.json())
   .then(artworks => {
     artworks.forEach(artwork => {
       const newArtwork = new Artwork(artwork);
       const theTableData = newArtwork.formatArtworkIndexData(artistId);
       tableContent(`${theTableData}`);
     })
   })
   .then(() => deleteArtwork())
}

///// delete artist /////
const deleteArtist = () => {
  $(".delete_artist").on('click', function(e){
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
      },
      error: function (data) {
        // alert('Oops! Looks like something went wrong.');
      }
    });
  })
}
