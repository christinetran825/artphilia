$(document).ready(function() {
  getNewArtwork();
  getEditArtwork();
  postNewArtwork();
  postEditArtwork();
  // clickOnArtwork();
})

///////////////////// OPTION A /////////////////////
// const getNewArtwork = () => {
//   $(document).on('click', "#add_artwork", function(e){
//     e.preventDefault();
//     let id = $(this).attr("data-id");
//     $.get(this.href).success(function(response){
//       let _template = response
//       let template = $.parseHTML(_template)
//       let theHeader = $(template).find(".header")
//       let theForm = $(template).find("#new_artwork")
//       theNewEditBody(theHeader, theForm);
//       addOwnershipForm(theForm);
//     })
//   })
// }

// Artworks Index is in Artist Show within Show All Artwork button event
// const getEditArtwork = () => {
//   $(document).on('click', "#update_artwork", function(e){
//     e.preventDefault();
//     $.get(this.href).success(function(response){
//       let _template = response
//       let template = $.parseHTML(_template)
//       let heading = $(template).find(".header")
//       let theForm = $(template).find(".edit_artwork")
//       theNewEditBody(heading, theForm)
//       addOwnershipForm(theForm);
//     })
//   });
// }

// const postNewArtwork = () => {
//   $(document).on('submit', "form#new_artwork", function(e){
//     e.preventDefault();
//     let $form = $(this);
//     let action = $form.attr("action");
//     let data = $form.serialize();
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: data,
//       // datatype: 'json',
//       success: function(data){
//        debugger;
//         let artworkShowHeader = $(data).find(".header")
//         let artworkDetails = $(data).find(".content")
//         objShowBody(artworkShowHeader);
//         addContents(artworkDetails);
//       },
//       error: function(){
//         alert("Hm... something didn't work.");
//       }
//     })
//   })
// }


// const clickOnArtwork = () => {
//   $(document).on('click', ".artwork_show_link", function(e){
//     e.preventDefault();
//     $.get(this.href).success(function(response){
//       let _template = response
//       let template = $.parseHTML(_template)
//       let artworkHeader = $(template).find(".header")
//       let artworkShow = $(template).find(".content")
//       objShowBody(artworkHeader)
//       addContents(artworkShow)
//     })
//   })
// }

///////////////////// Option B (formally Option C) /////////////////////
const getNewArtwork = () => {
  $(document).on('click', "#add_artwork", function(e){
    e.preventDefault();
    let heading = `<h4>Add a New Artwork</h4>`
    let artistId = $(this).attr("data-id");
    let cancelButton = `<button><a href="/artists/${artistId}/artworks" data-id="${artistId}" id="load_artworks">Cancel</a></button>`
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let theForm = $(template).find("#new_artwork")
      showFormInArtistShow(heading, cancelButton, theForm);
      addOwnershipForm(theForm);
    })
  })
}

function buildCancelButton(){

}

const getEditArtwork = () => {
  $(document).on('click', "#update_artwork", function(e){
    e.preventDefault();
    let artistId = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let heading = `<h4>Edit the Artwork</h4>`
      let cancelButton = `<button><a href="/artists/${artistId}/artworks" data-id="${artistId}" id="load_artworks">Cancel</a></button>`
      let theForm = $(template).find(".edit_artwork")
      showFormInArtistShow(heading, cancelButton, theForm);
      addOwnershipForm(theForm);
    })
  });
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
