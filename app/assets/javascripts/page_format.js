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

function theNewEditBody(theHeader, theForm){
  theBodyPage();
  bodyElements(theHeader, theForm)
}

function theShowBody(heading, attr, links){
  theBodyShowPage();
  bodyShowElements(heading, attr, links)
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

function theBodyShowPage(){
  $("#main-container").html(
    `
      <div class="header">
        <div class="heading"></div>
        <div class="obj-attr"></div>
        <div class="obj-links"></div>
      </div>
      <div class="content"></div>
    `
  )
}

function bodyShowElements(heading, attr, links){
  $(".heading").html(
    heading
  );
  $(".obj-attr").html(
    attr
  );
  $(".obj-links").html(
    links
  );
  $(".content").html(
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
