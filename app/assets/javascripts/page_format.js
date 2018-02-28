////////////// BUILDING BLOCKS //////////////
  //main-container holds page header and page content;
  //page header has container_show and btn-group div
  //Clear main-container; add the bodyElements (header and pageContent);
  //const the bodyElements to include theHeader and pageContent divs

////// Artist Index, Fav Artist, Owned Artwork //////
function theIndexBody(theHeader, theTableHeader){
  theBodyPage();
  addHeader(theHeader);
  addTableToContents();
  tableHeader(theTableHeader);
}

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
  $("table tbody").html(theTableData)
}


////// FORMs //////
function theNewEditBody(theHeader, theContents){
  theBodyPage();
  addHeader(theHeader);
  addContents(theContents);
}

////// Artist Show //////
function theShowBody(heading, attr, links){
  theBodyPage();
  addShowHeader();
  addShowHeaderElements(heading, attr, links)
}

function addShowHeader(){
  $("#header").html(
    `<div class="heading"></div>
    <div class="obj-attr"></div>
    <div class="obj-links"></div>`
  );
}

function addShowContents(theContents){
  $("#content").html(
    theContents
  );
}

function addShowHeaderElements(heading, attr, links){
  $(".heading").html(
    heading
  );
  $(".obj-attr").html(
    attr
  );
  $(".obj-links").html(
    links
  );
}

////// Artwork Show //////
function theArtworkBodyPage(theContents){
  $("#main-container").html(
    theContents
  )
}

// function theBodyArtworkNewEditPage(){
//   $("#main-container").html(
//     `
//       <div class="header">
//         <div class="heading"></div>
//         <div class="obj-links"></div>
//       </div>
//       <div class="content"></div>
//     `
//   )
// }
//
//
// function bodyArtworksNewEditElements(heading, links){
//   $(".heading").html(
//     heading
//   );
//   $(".obj-links").html(
//     links
//   );
//   $(".content").html(
//   );
// }
//
// ///////********
// function theShowArtworksPortion(){
//   $(".content").html(
//     ` <div id="mini">
//         <div class="heading">
//           <h4>Add a New Artwork</h4>
//         </div>
//         <div class="obj-links"></div>
//         <div class="content"></div>
//       </div>
//     `
//   )
// }
