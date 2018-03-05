$(document).ready(function() {
  getNewArtwork();
  // getEditArtwork();
  // postNewArtwork();
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
    let id = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let heading = `<h4>Add a New Artwork</h4>`
      let cancelButton = cancelToArtistArtworks(id)
      let theForm = $(template).find("#new_artwork")
      showFormInOptB(heading, cancelButton, theForm);
      addOwnershipForm(theForm);
    })
  })
}

const getEditArtwork = () => {
  $(document).on('click', "#update_artwork", function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let heading = `<h4>Edit the Artwork</h4>`
      let cancelButton = cancelToArtistArtworks(id)
      let theForm = $(template).find(".edit_artwork")
      showFormInOptB(heading, theForm)
      addOwnershipForm(theForm);
    })
  });
}

const postNewArtwork = () => {
  $(document).on('submit', "form#new_artwork", function(e){
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
       debugger;
        let artworkShowHeader = $(data).find(".header")
        let artworkDetails = $(data).find(".content")
        showArtworkInOptB(artworkShowHeader, artworkDetails);
      },
      error: function(){
        alert("Hm... something didn't work.");
      }
    })
  })
}


function cancelToArtistArtworks(theClickedArtist){
  let backTheArtist = `<button><a href="/artists/${theClickedArtist}/artworks" data-id="${theClickedArtist}" id="load_artworks">Cancel</a></button>`
  return backTheArtist
}

// Artwork ownership portion - form
function addOwnershipForm(ownArtworkSection) {
  $("#artwork_user_owned_yes").click(function(){
    if ((this.value) = "Yes") {
      $("div:hidden").show("fast")
    }
  })
}
