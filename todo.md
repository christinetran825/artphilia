1. Add Gems
[x] add bcrypt
[x] add pry
[x] add OmniAuth
[x] add OmniAuth-facebook

2. Create Welcome Homepage
[x] rails g migration Welcome
[x] add h1 ActionController[] add h4 app description
[x] add link - basic signup
[x] add link - basic log in
[x] add link - social media (omniauth)
[] add cover image

3. Define helper methods in ApplicationController
[x] helper methods = logged_in?, current_user, log_user_in

4. User
[x] rails g resource Users name:string email:string password_digest:string uid:string
  #uid for OAuth
[x] model - has_secure_password
  [x] association = has_many :artists has_many :artworks
  [x] validations
    [x] name
    [x] email
    [x] password
[x] form
  [x] errors for sign up - error - 'Please enter a valid email & valid password'
  [x] create => redirects to Artists index
[x] show 1 user

5. OmniAuth
[x] create config/initializers/omniauth.rb
[x] create FB OAuth settings/credentials
[x] add gem dotenv-rails
[x] create .env file to root
[x] add credentials to .env
  FACEBOOK_KEY=xxxx
  FACEBOOK_SECRET=xxxx
[x] add .env to .gitignore
[x] create link to initiate FB OAuth process
  [x] add /auth/facebook link to view > welcome > home
  <%= link_to('Log in with Facebook!', '/auth/facebook') %>
  [x] add get '/auth/facebook/callback' => 'sessions#create' to config/routes.rb
[x] add def auth request.env['omniauth.auth'] end to SessionsController

6. Sessions
[x] rails g controller Sessions
[x] add def auth request.env['omniauth.auth'] end to SessionsController
[x] add create action
[x] form
  [x] create => redirects to Artists index
  [x] errors for login - error - 'Invalid email/password combination'
  [x] add link - social media (omniauth)
[] destroy - notice - 'You're logged out'

7. Nav bar
[x] add nav bar
[x] add if logged in logic
  [] links to homepage, artists list, (static pages - Art style, history)

8. Layouts > Application
[x] add render header partial to application
[x] add flash message iterations

9. Artist
[x] rails g resource Artists name:string website:string discovered:string rating:integer notes:string
** discovered can be at gallery?
[x] model
  [x] associations
    [x] belongs_to :user
    [x] has_many :artworks, through: :artist_artwork
    [x] has_many artist_artwork
  [x] accepts_nested_attributes_for :artworks
  [x] before validations = name titlecase
  [x] validations
    [x] name
    [x] website
    [x] discovered
    [x] rating
    [x] notes
  [] avoid duplicates
[x] form
  [x] create - success - 'New Artist added'
  [x] edit - success - 'Artist was updated'
  [x] redirects to artist#show
[x] show 1 artist
  [x] delete artist - success - 'Are you sure you want to delete this Artist?'
  [x] notice - 'Artist was deleted'

!!!!
  ensure nested routes for artists and artworks
  artist controller#show => build the artwork relationship => @artwork = @artist.artworks.build
  artwork controller#create => @artist = Artist.find(params[:artist_id]) #find the parent
                            => @artwork = @artist.artworks.build(artwork_params)
                            => ensure routes are redirect_to artist_path(@artist)
  Add validations where blank spaces/entries are not accepted

10. Artwork
[x] rails g resource Artworks title:string exhibition:string medias:string user_owned:string signed:string original:string rating:integer comments:string
[x] model
  [x] create setter method = medium_name ** medium is a collection;
  [x] before validations = title, exhibition titlecase
  [x] association
    [x] belongs_to :user
    [x] has_many :artists, through: :artist_artwork
    [x] has_many artist_artwork
    [x] has_many :medias
  [x] validations
    [x] title
    [x] exhibition
    [x] medias
    [x] user_owned
    [x] signed
    [x] original
    [x] rating
    [x] comments
  [] avoid duplicates
[x] form
  [x] create - notice - 'New Artwork added'
  [x] edit - notice - 'Artwork was updated'
  [x] redirects to artist_artwork#show
[] show 1 artwork
  [x] delete artwork - alert - 'Are you sure you want to delete this Artwork?'
  [x] notice - 'Artwork was deleted'

11. Media
[x] rails g migration Medium name:string
[x] model
  [x] association
    [x] belongs_to :artworks
  [] avoid duplicates
<!-- [] form
  [] create - alert - 'New Medium added'
  [] edit - alert - 'Medium was updated'
  [] redirects to medium#show
[] delete medium - confirm - 'Are you sure you want to delete this Medium?'
[] alert - 'Medium was removed' -->

Little things
[] check if flash messages work correctly
[] check if flash messages appear where they should be
[]

CSS/bootstrap
[] work on divs, classes
[] colors
[] fonts

NESTED
{
  :artist => {
    :name => 'Mark Ryden'      #titlecase
    :website => 'website'
    :discovered => 'The Yak Book - ComicCon vendor'
    :artwork_attributes => {
      "0" => {
        :title => "The Tree of Life", #titlecase
        :exhibition => 'The Tree Show', #titlecase
        :medium => [
          'oil',      #titlecase #f.collection_select :media, Media.all, :id, :media
          ]
        :user_owned => 'Yes'
        :signed => 'Yes'
        :original => 'Yes'
        :rating => '5'
        :comments => 'comments',
      }
      "1" => {
        :title => "The Last Rabbit", #titlecase
        :exhibition => 'Bunnies & Bees', #titlecase
        :medium => [
          'Painting',
          'oil'     #f.collection_select :media, Media.all, :id, :media
          ]
        :user_owned => 'No'
        :signed => 'No'
        :original => 'No'
        :rating => '4'
        :comments => 'comments',
      }
    }
    :artist_rating => 5
    :notes => 'notes'
  }
}

OAUTH2 Flow
1. User goes to /auth/provider on my site
2. Omniauth redirects them to provider, providing provider with key & secret identifying the application. Provider then will know which application user is trying to log into
3. User logs in with Provider
4. Provider redirects user back to application (callback URL) and provides application with a secret code representing the user on provider
5. Application sends the secret code back to Provider
6. Provider confirms code that came from Provider and that application received it
7. Provider sends application back the user's data
8. Application checks if user exists in the system by email, if so, logs them in
9. If user doesn't exist, application creates a user based on their email and logs them in
