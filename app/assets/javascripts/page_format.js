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
  $("table tbody").html(theTableData)
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

/// Artist Show - artwork index in the content

















// ////// Artist Show //////
// function theShowBody(heading, links){
//   theBodyPage();
//   addShowHeader();
//   addShowHeaderElements(heading, links)
// }
//
// function addShowHeader(){
//   $("#header").html(
//     `<div class="heading"></div>
//     <div class="obj-links"></div>`
//   );
// }
//
// function addShowContents(theContents){
//   $("#content").html(
//     theContents
//   );
// }
//
// function addShowHeaderElements(heading, links){
//   $(".heading").html(
//     heading
//   );
//   $(".obj-links").html(
//     links
//   );
// }
//
// ////// Artwork Show //////
// function theArtworkBodyPage(theContents){
//   $("#main-container").html(
//     theContents
//   )
// }

///// OPTION B - Artworks Index within Artist Show /////
// function theArtworkBodyPageOptB(){
//   $("#content").html(
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
// function bodyArtworksHeaderOptB(heading, links){
//   $(".heading").html(
//     heading
//   );
//   $(".obj-links").html(
//     links
//   );
// }
//
// function bodyArtworksContentOptB(contents){
//   $(".content").html(
//     contents
//   );
// }
