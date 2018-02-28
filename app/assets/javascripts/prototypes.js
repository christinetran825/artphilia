////////////// CONSTRUCTORS //////////////

function Artist(artist){
  this.id = artist.id,
  this.name = artist.name,
  this.website = artist.website,
  this.discovered = artist.discovered,
  this.rating = artist.rating,
  this.notes = artist.notes
}

/////// ALL ARTISTS ///////
Artist.prototype.formatArtistIndexData = function(numofArtworks) {
  let artistHtml = `
    <tr>
      <td><a href="/artists/${this.id}" data-id="${this.id}" class="artist_show_link">${this.name}</a></td>
      <td><a href="/artists/${this.id}/artworks" data-id="${this.id}" class="artist_show_link">test</a></td>
      <td><a target=_blank href="${this.website}">${this.website}</a></td>
      <td>${this.rating}</td>
      <td><a href="/artists/${this.id}/edit" data-id="${this.id}" class="update_artist">Edit</a></td>
      <td><a href="/artists/${this.id}" data-method="delete">Delete</a></td>
    </tr>
  `
  return artistHtml
}
