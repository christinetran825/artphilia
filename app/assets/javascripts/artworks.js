$(document).ready(function() {
  getNewArtwork();
  getEditArtwork();
})

// OPTION A
const getNewArtwork = () => {
  $(document).on('click', "#add_artwork", function(e){
    e.preventDefault();
    let id = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let heading = `<h1>Add a New Artwork</h1>`
      let links = cancelToArtistArtworks(id)
      let theForm = $(template).find("#new_artwork")
      theArtworkNewEditBody(heading, links);
      $(".content").html(theForm);
      addOwnershipForm(theForm);
    })
  })
}

//Artworks Index is in Artist Show within Show All Artwork button event
const getEditArtwork = () => {
  $(document).on('click', "#update_artwork", function(e){
    e.preventDefault();
    // let id = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let heading = $(template).find(".header")
      // let links = cancelToArtistArtworks(id)
      let theForm = $(template).find(".edit_artwork")
      theNewEditBody(heading, theForm)
      // $(".content").html(theForm);
      addOwnershipForm(theForm);
    })
  });
}

// function cancelToArtistArtworks(theClickedArtist){
//   let backTheArtist = `<button><a href="/artists/${theClickedArtist}/artworks" data-id="${theClickedArtist}" class="artist_show_link">Cancel</a></button>`
//   return backTheArtist
// }

// Option B (formally Option C)
// const getNewArtwork = () => {
//   $(document).on('click', "#add_artwork", function(e){
//     e.preventDefault();
//     // don't repaint the DOM; add the artwork form in pageContent
//     let id = $(this).attr("data-id");
//     $.get(this.href).success(function(response){
//       let _template = response
//       let template = $.parseHTML(_template)
//       // let cancel = $(template).find("#the_artworks .obj-links")
//       let final = $(template).find("#new_artwork")
//       theShowArtworksPortion();
//       $("#mini .obj-links").html(cancelToArtistArtworks(id))
//       $("#mini .content").html(final);
//       addOwnershipForm(final);
//     })
//   })
// }

// function cancelToArtistArtworks(theClickedArtist){
//   let backTheArtist = `<button><a href="/artists/${theClickedArtist}/artworks" data-id="${theClickedArtist}" id="load_artworks">Cancel</a></button>`
//   return backTheArtist
// }

// Artwork new - form
// function addOwnershipForm(ownArtworkSection) {
//   $("#artwork_user_owned_yes").click(function(){
//     if ((this.value) = "Yes") {
//       $("div:hidden").show("fast")
//     } else {
//       $("div:hidden").hide("fast")
//     }
//   })
// }
