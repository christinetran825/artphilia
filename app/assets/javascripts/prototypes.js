////////////// CONSTRUCTORS //////////////

function Artist(artist){
  this.id = artist.id,
  this.name = artist.name,
  this.website = artist.website,
  this.discovered = artist.discovered,
  this.rating = artist.rating,
  this.notes = artist.notes
}

function Artwork(artwork){
  this.id = artwork.id,
  this.title = artwork.title,
  this.exhibition = artwork.exhibition,
  this.user_owned = artwork.user_owned,
  this.comments = artwork.comments,
  this.rating = artwork.rating
}

function Medium(medium){
  this.id = medium.id,
  this.name = medium.name
}

/////// ALL ARTISTS ///////
Artist.prototype.formatArtistIndexData = function(numofArtworks) {
  let artistHtml = `
    <tr>
      <td><a href="/artists/${this.id}" data-id="${this.id}" class="artist_show_link">${this.name}</a></td>
      <td><a href="/artists/${this.id}" data-id="${this.id}" class="artist_show_link">${numofArtworks}</a></td>
      <td><a target=_blank href="${this.website}">${this.website}</a></td>
      <td>${this.rating}</td>
      <td><a href="/artists/${this.id}/edit" data-id="${this.id}" id="update_artist">Edit</a></td>
      <td><a href="/artists/${this.id}" id="delete_artist" data-method="delete">Delete</a></td>
    </tr>
  `
  return artistHtml
}

/////// FAVORITE ARTISTS ///////
Artist.prototype.formatFavArtistIndexData = function(numofArtworks) {
  let favArtists = `
    <tr>
      <td><a href="/artists/${this.id}" data-id="${this.id}" class="artist_show_link">${this.name}</a></td>
      <td><a href="/artists/${this.id}" data-id="${this.id}" class="artist_show_link">${numofArtworks}</a></td>
      <td><a target=_blank href="${this.website}">${this.website}</a></td>
      <td>${this.rating}</td>
      <td><a href="/artists/${this.id}/edit" data-id="${this.id}" id="update_artist">Edit</a></td>
      <td><a href="/artists/${this.id}" id="delete_artist" data-method="delete">Delete</a></td>
    </tr>
  `
  return favArtists
}

Artwork.prototype.formatArtworkOwnedData = function(theArtistName, theOwnedArtworkArtist) {
  let artworkOwned = `
    <tr>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}" class="artwork_show_link">images</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}" class="artwork_show_link">${this.title}</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}" class="artist_show_link">${theArtistName}</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}/edit" id="update_artwork">Edit</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}" id="delete_artwork" data-method="delete">Delete</a></td>
    </tr>
  `
  return artworkOwned
}

/////// SHOW an Artist ///////
Artist.prototype.formatArtistShowHeader = function() {
  let artistShow = `
    <h1>${this.name}</h1>
    <p><a target=_blank href="${this.website}">${this.website}</a></p>
    <p>Discovered at: ${this.discovered}</p>
    <p>Rating: ${this.rating}</p>

    <button><a href="/artists" id="artist_index">Back to All Artists</a></button>
    <button><a href="/artists/${this.id}/edit" id="update_artist">Edit Artist</a></button>
    <button><a href="/artists/${this.id}" data-method="delete" id="delete_artist">Delete Artist</a></button>
    <button><a href="/artists/${this.id}/artworks" id="load_artworks">Show All Artworks</a></button>
  `
  return artistShow
}
