$(document).ready(function() {
  getNewArtwork();
  getEditArtwork();
  postNewArtwork();
  postEditArtwork();
  clickOnArtwork();
})

///////////////////// Option B (formally Option C) /////////////////////
const getNewArtwork = () => {
  $(document).on('click', "#add_artwork", function(e){
    e.preventDefault();
    let artistId = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let heading = `<h4>Add a New Artwork</h4>`
      let cancelButton = artworkFormCancelButton(artistId)
      let theForm = $(template).find("#new_artwork")
      buildArtworkNewEditBody(heading, cancelButton, theForm)
    })
  })
}

const getEditArtwork = () => {
  $(document).on('click', "#update_artwork", function(e){
    e.preventDefault();
    let artistId = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let heading = `<h4>Edit the Artwork</h4>`
      let cancelButton = artworkFormCancelButton(artistId)
      let theForm = $(template).find(".edit_artwork")
      buildArtworkNewEditBody(heading, cancelButton, theForm)
    })
  });
}

function artworkFormCancelButton(artistId){
  let cancelButton =
    `<button><a href="/artists/${artistId}/artworks" data-id="${artistId}" id="load_artworks">Cancel</a></button>`
  return cancelButton
}

function buildArtworkNewEditBody(heading, cancelButton, theForm){
  showFormInArtistShow(heading, cancelButton, theForm);
  addOwnershipForm(theForm);
}


const postNewArtwork = () => {
  $(document).on('submit', "form#new_artwork", function(e){
    e.preventDefault();
    let $form = $(this);
    postingArtworkAjax($form)
  })
}

const postEditArtwork = () => {
  $(document).on('submit', "form.edit_artwork", function(e){
    e.preventDefault();
    let $form = $(this);
    postingArtworkAjax($form)
  })
}

function postingArtworkAjax($form){
  let action = $form.attr("action");
  let data = $form.serialize();
  $.ajax({
    type: "POST",
    url: action,
    data: data,
    success: function(data){
      // let header = $(data).find(".header")
      let details = $(data).find(".content")
      showArtworkInOptB(details);
    },
    error: function(){
      alert("Hm... something didn't work.");
    }
  })
}

// Artwork ownership portion - form
function addOwnershipForm(ownArtworkSection) {
  $("#artwork_user_owned_yes").click(function(){
    if ((this.value) = "Yes") {
      $("div:hidden").show("fast")
    }
  })
}

//
const clickOnArtwork = () => {
  $(document).on('click', '.artwork_show_link', function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let details = $(response).find(".content")
      showArtworkInOptB(details);
    })
  })
}
