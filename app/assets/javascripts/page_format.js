////////////// BUILDING BLOCKS //////////////
  //main-container holds page header and page content;
  //page header has container_show and btn-group div
  //Clear main-container; add the bodyElements (header and pageContent);
  //const the bodyElements to include theHeader and pageContent divs

/// set up the body ///
function theBodyPage(){
  $("#main-container").html(
    `
      <div id="header"></div>
      <div id="content"></div>
    `
  )
}

/// add the body's content into its elements (with the Table into the pageContent div)///
function addHeader(theHeader){
  $("#header").html(theHeader);
}

function addContents(theContents){
  $("#content").html(theContents);
}

/// set up the table to the pageContent div ///
const theTable = () => {
  const table = `
    <table class="table table-striped">
      <thead></thead>
      <tbody></tbody>
    </table> `
  return table
}

// add the column name to the table header
function tableHeader(theTableHeader){
  $("table thead").html(theTableHeader)
}

// add the data to the table body
function tableContent(theTableData){
  $("table tbody").append(theTableData)
}

////// Artist Index, Fav Artist, Owned Artwork //////
function theIndexBody(theHeader, theTableHeader){
  theBodyPage();
  addHeader(theHeader);
  addContents(theTable());
  tableHeader(theTableHeader);
}

////// FORMs //////
function theNewEditBody(theHeader, theContents){
  theBodyPage();
  addHeader(theHeader);
  addContents(theContents);
}

////// Artist Show & Artwork Show //////
function theShowBody(theHeader){
  theBodyPage();
  addHeader(theHeader);
}



/// OPTION B - Artworks Index within Artist Show /////
////// show the artwork new & edit form inside artist show
function artistArtworksContent(){
  $("#content").html(
    `
      <div id="artworks_container">
        <div class="artworks_header"></div>
        <div class="artworks_contents"></div>
      </div>
    `
  )
}

function artistArtworksHeader(header){
  $(".artworks_header").html(header);
}

function showArtistArtworks(){
  $(".artworks_contents").html(theTable());
}

function showArtistArtworksForm(theForm){
  $(".artworks_contents").html(theForm);
}

function showArtworksInArtistShow(theHeader, theTableHeader){
  artistArtworksContent();
  artistArtworksHeader(theHeader);
  showArtistArtworks();
  tableHeader(theTableHeader)
}

function showArtworksFormInArtistShow(theHeader, formHeading, theForm, artistId){
  artistArtworksContent();
  artistArtworksHeader(theHeader);
  replaceFormat(formHeading, artistId);
  showArtistArtworksForm(theForm);
}

function replaceFormat(formHeading, artistId){
  $(".heading").html(formHeading)
  $(".obj-links").html(
    `<button><a href="/artists/${artistId}/artworks" data-id="${artistId}" id="load_artworks">Cancel</a></button>`
  )
}
