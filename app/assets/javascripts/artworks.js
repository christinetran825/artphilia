$(document).ready(function() {
  addNewArtwork();
  artworkEdit();
})

//Artworks Index is in Artist Show within Show All Artwork button event
const artworkEdit = () => {
  $(document).on('click', ".update_artwork", function(e){
    e.preventDefault();
  });
}

// OPTION A
// const addNewArtwork = () => {
//   $(document).on('click', "a#new_artwork", function(e){
//     e.preventDefault();
//     let id = $(this).attr("data-id");
//     $.get(this.href).success(function(response){
//       let _template = response
//       let template = $.parseHTML(_template)
//       let final = $(template).find("#artwork_form")
//       addOwnershipForm(final)
//       artworkNewEdit(id, final);
//     })
//   })
// }
// function artworkNewEdit(theID, theForm){
//   let objHeaderDetails = `<h1>New Artwork</h1>`
//   let objButtons = cancelToTheArtist(theID);
//   let objPageContent = theForm;
//   objectNewEdit(objHeaderDetails, objButtons, objPageContent);
// }
// function cancelToTheArtist(theClickedArtist){
//   let backAllArtists = `<button><a href="/artists/${theClickedArtist}" data-id="${theClickedArtist}" class="artist_show_link">Cancel</a></button>`
//   return backAllArtists
// }

// Option B (formally Option C)
const addNewArtwork = () => {
  $(document).on('click', "#add_artwork", function(e){
    e.preventDefault();
    // don't repaint the DOM; add the artwork form in pageContent
    let id = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let cancel = $(template).find("#the_artworks .obj-links")
      let final = $(template).find("#new_artwork")
      theShowArtworksPortion();
      $("#mini.obj-links").html(cancel)
      $("#mini.content").html(final);
      addOwnershipForm(final);
    })
  })
}
function cancelToArtistArtworks(theClickedArtist){
  let backAllArtists = `<button><a href="/artists/${theClickedArtist}/artworks" data-id="${theClickedArtist}" id="load_artworks">Cancel</a></button>`
  return backAllArtists
}

// Artwork new - form
function addOwnershipForm(ownArtworkSection) {
  $("#artwork_user_owned_yes").click(function(){
    if ((this.value) = "Yes") {
      $("div:hidden").show("fast")
    } else {
      $("div:hidden").hide("fast")
    }
  })
}
