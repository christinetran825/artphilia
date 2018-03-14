////// ROUTES //////
function getRouteId(routeId) {
  switch (routeId) {
    case "artist_index":
      getAllArtists();
      break;
    case "fav_artists":
      addFavArtistsByRating()
      break;
    case "owned_artworks":
      addArtworksOwnedByYes()
      break;
  }
}

function getRouteResponse(theRoute) {
  let routeId = theRoute.id
  // history.pushState(null, null, "artists");
  $.get(theRoute.href).success(function(response){
    const _template = response
    const template = $.parseHTML(_template)
    const theHeader = $(template).find(".header")
    const theTableHeader = $(template).find(".table thead tr")
    theIndexBody(theHeader, theTableHeader)
    getRouteId(routeId)
  });
}


////// FORMS //////
function getFormId(theFormId) {
  switch (theFormId) {
    case "add_artist":
      formName = "#new_artist";
      break;
    case "update_artist":
      formName = ".edit_artist";
      break;
    case "add_artwork":
      formHeading = `<h4>Add a New Artwork</h4>`;
      formName = "#new_artwork";
      break;
    case "update_artwork":
      formHeading = `<h4>Edit the Artwork</h4>`;
      formName = ".edit_artwork";
      break;
    case "update_owned_artwork":
      formHeading = `<h4>Edit Owned Artwork</h4>`;
      formName = ".edit_artwork";
      break;
  }
}

function getFormResponses(theObjHref){
  $.get(theObjHref).success(function(response){
    const _template = response
    const template = $.parseHTML(_template)
    const theHeader = $(template).find(".header")
    const theForm = $(template).find(formName)
    theNewEditBody(theHeader, theForm)
  })
}

function getFormAndResponses(theFormObj){
  getFormId(theFormObj.id)
  getFormResponses(theFormObj.href)
}
