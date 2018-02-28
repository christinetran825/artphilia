////////////// BUILDING BLOCKS //////////////
  //main-container holds page header and page content;
  //page header has container_show and btn-group div
  //Clear main-container; add the bodyElements (header and pageContent);
  //const the bodyElements to include theHeader and pageContent divs

function theIndexBody(theHeader, theTableHeader){
  theBodyPage();
  bodyElementsWithTable(theHeader);
  tableHeader(theTableHeader);
}

function theBodyPage(){
  $("#main-container").html(
    `
      <div id="theHeader"></div>
      <div id="pageContent"></div>
    `
  )
}

function bodyElements(theHeader, theContent){
  $("#theHeader").html(
    theHeader
  );
  $("#pageContent").html(
    theContent
  );
}

function bodyElementsWithTable(theHeader){
  $("#theHeader").html(
    theHeader
  );
  $("#pageContent").html(
    theTable()
  );
}

//Add the table to pageContent
function theTable(){
  $("#pageContent").html(
    `
      <table class="table table-striped">
        <thead></thead>
        <tbody></tbody>
      </table>
    `
  )
}

//Add the table header contents
function tableHeader(theTableHeader){
  $("table thead").html(theTableHeader)
}

//Add the table data
function tableContent(theTableData){
  $("table tbody").html(theTableData)
}
