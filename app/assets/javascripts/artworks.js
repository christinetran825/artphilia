$(document).ready(function() {
  getNewArtwork();
  getEditArtwork();
  postNewArtwork();
  postEditArtwork();
  clickOnArtwork();
  deleteArtwork();
})

// Artwork ownership portion - form
function addOwnershipForm(ownArtworkSection) {
  $("#artwork_user_owned_yes").click(function(){
    if ((this.value) = "Yes") {
      $("div:hidden").show("fast")
    }
  })
}

const getNewArtwork = () => {
  $(document).on('click', "#add_artwork", function(e){
    getArtistArtworkForm(e, this)
  })
}

const getEditArtwork = () => {
  $(document).on('click', "#update_artwork", function(e){
    getArtistArtworkForm(e, this)
  });
}

const postNewArtwork = () => {
  $(document).on('submit', "form#new_artwork", function(e){
    e.preventDefault();
    postingArtworkAjax(this)
  })
}

const postEditArtwork = () => {
  $(document).on('submit', "form.edit_artwork", function(e){
    e.preventDefault();
    postingArtworkAjax(this)
  })
}

function postingArtworkAjax(theSubmission){
  const $form = $(theSubmission);
  const action = $form.attr("action");
  const data = $form.serialize();
  $.ajax({
    type: "POST",
    url: action,
    data: data,
    success: function(data){
      // const header = $(data).find(".header")
      const details = $(data).find(".content")
      showArtworkInOptB(details);
    },
    error: function(){
      alert("Hm... something didn't work.");
    }
  })
}

//
const clickOnArtwork = () => {
  $(document).on('click', '.artwork_show_link', function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      const _template = response
      const template = $.parseHTML(_template)
      const details = $(response).find(".content")
      showArtistArtworksForm(details);
    })
  })
}

///// delete artwork /////
const deleteArtwork = () => {
  $(document).on('click', "#delete_artwork", function(e){
    debugger
    e.preventDefault();
    const $form = $(this);
    const action = $form.attr("href");
    $.ajax({
      type: "POST",
      url: action,
      data: {_method: 'delete'},
      beforeSend: function(){
        const r = confirm('Are you sure you want to delete this Artwork?');
        if (r == true) {
            alert("The Artist was Removed.")
        } else {
            alert('Oops! Looks like something went wrong.');
        }
      },
      success: function (data) {
        debugger;
        // alert("The Artist was Removed.")
        theBodyPage()
      },
      error: function (data) {
        // alert('Oops! Looks like something went wrong.');
      }
    });
  })
}
