////// ROUTES //////
function getRouteId(routeId, theHeader, theTableHeader, artistId) {
  switch (routeId) {
    case "artist_index":
      theIndexBody(theHeader, theTableHeader)
      sortAttrButton()
      getAllArtists();
      break;
    case "fav_artists":
      theIndexBody(theHeader, theTableHeader)
      addFavArtistsByRating();
      break;
    case "owned_artworks":
      theIndexBody(theHeader, theTableHeader)
      addArtworksOwnedByYes(artistId);
      break;
    case "load_artworks":
      showArtworksInArtistShow(theHeader, theTableHeader)
      getAllArtistArtworks(artistId);
      break;
  }
}

function sortAttrButton(){
  $(sortAttr()).insertBefore( ".table" );
}

function sortAttr(){
  let button = `<button id="obj_sort_attr">Sort</button>`
  return button
}


function getRouteResponse(e, theRoute) {
  e.preventDefault();
  const routeId = theRoute.id
  // history.pushState(null, null, "artists");
  const artistId = $(theRoute).attr("data-id")
  $.get(theRoute.href).success(function(response){
    const _template = response
    const template = $.parseHTML(_template)
    const theHeader = $(template).find(".header")
    const theTableHeader = $(template).find(".table thead tr")
    getRouteId(routeId, theHeader, theTableHeader, artistId)
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

function getFormResponses(theFormObjHref){
  $.get(theFormObjHref).success(function(response){
    const _template = response
    const template = $.parseHTML(_template)
    const theHeader = $(template).find(".header")
    const theForm = $(template).find(formName)
    theNewEditBody(theHeader, theForm)
  })
}

function getFormAndResponses(e, theFormObj){
  e.preventDefault();
  getFormId(theFormObj.id)
  getFormResponses(theFormObj.href)
}

function getArtworkForm(theObj) {
  const artistId = $(theObj).attr("data-id");
  // getArtistDataId(theObj)
  $.get(theObj.href).success(function(response){
    const _template = response
    const template = $.parseHTML(_template)
    const theHeader = $(template).find(".header")
    const theForm = $(template).find(formName)
    showArtworksFormInArtistShow(theHeader, formHeading, theForm, artistId);
    addOwnershipForm(theForm);
  })
}

function getArtistArtworkForm(e, theFormObj){
  e.preventDefault();
  getFormId(theFormObj.id)
  getArtworkForm(theFormObj)
}
