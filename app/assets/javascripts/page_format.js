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
  $("#header").html(
    theHeader
  );
}

function addContents(theContents){
  $("#content").html(
    theContents
  );
}

function addTableToContents(){
  $("#content").html(
    theTable()
  );
}

/// set up the table to the pageContent div ///
const theTable = () => {
  let table = `
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
  addTableToContents();
  tableHeader(theTableHeader);
}

////// FORMs //////
function theNewEditBody(theHeader, theContents){
  theBodyPage();
  addHeader(theHeader);
  addContents(theContents);
}

////// Artist Show & Artwork Show //////
function objShowBody(theHeader){
  theBodyPage();
  addHeader(theHeader);
}

/// OPTION B - Artworks Index within Artist Show /////
function newEditInArtistShowOptB(){
  $("#content").html(
    `
    <div id="all_artworks" class="header">
      <div class="heading"></div>
      <div class="obj-links"></div>
    </div>
    <div id="formInShow" class="theContent"></div>
    `
  )
}

function addHeaderElementsInArtistShow(heading, cancelButton){
  $("#all_artworks .heading").html(
    heading
  );
  $("#all_artworks .obj-links").html(
    cancelButton
  );
}

function showFormInArtistShow(theForm){
  $(".theContent").html(
    theForm
  );
}

function showFormInOptB(heading, cancelButton, theForm){
  newEditInArtistShowOptB()
  addHeaderElementsInArtistShow(heading, cancelButton)
  showFormInArtistShow(theForm)
}

function showArtworkInArtistShowOptB(){
  $("#content").html(
    `
    <div id="all_artworks" class="header"></div>
    <div id="formInShow" class="theContent"></div>
    `
  )
}

function addArtworkDetailsInArtistShow(heading, details){
  $("#all_artworks .header").html(
    heading
  );
  $(".theContent").html(
    details
  );
}


function showArtworkInOptB(header, details){
  showArtworkInArtistShowOptB()
  addArtworkDetailsInArtistShow(heading, details)
}
