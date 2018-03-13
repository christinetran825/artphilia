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

// function addTable(){
//   $("#content").html( theTable() );
// }

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
// function theIndexBody(theHeader, theTableHeader){
//   theBodyPage();
//   addHeader(theHeader);
//   addTable();
//   tableHeader(theTableHeader);
// }

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
function newEditInArtistShowOptB(){
  $("#content").html(
    `
    <div id="all_artworks" class="header">
      <div class="heading"></div>
      <div class="obj-links"></div>
    </div>
    <div id="formInShow"></div>
    `
  )
}

function addHeaderElementsInArtistShow(heading, cancelButton){
  $("#all_artworks .heading").html(heading);
  $("#all_artworks .obj-links").html(cancelButton);
}

function showFormInOptB(theForm){
  $("#formInShow").html(theForm);
}

function showFormInArtistShow(heading, cancelButton, theForm){
  newEditInArtistShowOptB()
  addHeaderElementsInArtistShow(heading, cancelButton)
  showFormInOptB(theForm)
}


////// show the artwork show page inside artist show
function showArtworkInArtistShowOptB(){
  $("#content").html(`<div id="artworkDetails"></div>`)
}

function addArtworkDetailsInArtistShow(details){
  $("#artworkDetails").html(details);
}

function showArtworkInOptB(details){
  showArtworkInArtistShowOptB();
  addArtworkDetailsInArtistShow(details)
}
