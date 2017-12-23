# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.create({
    name: 'mark ryden',
    website: 'www.markryden.com',
    discovered: 'comic-con',
    rating: 5,
    notes: "etheral, symbolic",
    user_id: 1
})

Artist.create({
    name: 'miss mindy',
    website: 'www.missmindy.com',
    discovered: 'instagram',
    rating: 4,
    notes: "dramatic, lots of Disney stuff",
    user_id: 1
})

Artist.create({
    name: 'adolie day',
    website: 'adolieday.blogspot.com',
    discovered: 'gallery nucleus',
    rating: 5,
    notes: "simple, cutesy",
    user_id: 1
})

Artist.create({
    name: 'fabio pastori',
    website: '',
    discovered: 'dinosaur museum in morrison, colorado',
    rating: 5,
    notes: "paloartist, dinosaurs, science",
    user_id: 1
})

Artist.create({
    name: 'maurice sendak',
    website: '',
    discovered: 'chicken soup with rice',
    rating: 5,
    notes: "children's illustrations, simple, funny",
    user_id: 1
})

Artist.create({
    name: 'joey chou',
    website: 'joeyart.tumblr.com',
    discovered: 'gallery nucleus',
    rating: 5,
    notes: "child-like awe",
    user_id: 2
})

Artist.create({
    name: 'brittney lee',
    website: 'www.etsy.com/shop/britsketch',
    discovered: 'gallery nucleus',
    rating: 5,
    notes: "shapes, colorful, inspired Frozen style",
    user_id: 2
})

Artist.create({
    name: 'beatrix potter',
    website: 'www.peterrabbit.com',
    discovered: 'peter rabbit storybook, local library',
    rating: 5,
    notes: "children's illustration, creatures, child-like awe, mushrooms, Scientific Studies",
    user_id: 2
})

Artist.create({
    name: 'nidhi chanani',
    website: 'everydayloveart.com',
    discovered: 'trickster in berkeley, ca',
    rating: 5,
    notes: "dreamy, coloful, digital",
    user_id: 3
})

Artwork.create({
    title: 'Blood, Sweat, Tears',
    exhibition: 'gallery one',
    user_owned: 'Yes',
    signed: "Yes",
    original: "Original",
    comments: "test",
    rating: 5,
    artist_id: 1,
    medium_id: 1
})
# medium = oil

Artwork.create({
    title: 'good luck',
    exhibition: 'gallery two',
    user_owned: 'No',
    signed: nil,
    original: nil,
    comments: "test",
    rating: 5,
    artist_id: 1,
    medium_id: 2
})
# medium = acrylic

Artwork.create({
    title: 'the hospital',
    exhibition: 'the art of whipped cream',
    user_owned: 'No',
    signed: nil,
    original: nil,
    comments: "test",
    rating: 3,
    artist_id: 1,
    medium_id: 3
})
# medium = graphite

Artwork.create({
    title: 'christina',
    exhibition: 'wondertoonel',
    user_owned: 'No',
    signed: nil,
    original: nil,
    comments: "test",
    rating: 5,
    artist_id: 1,
    medium_id: 1
})
# medium = oil

Artwork.create({
    title: 'The Creatrix',
    exhibition: 'wondertoonel',
    user_owned: 'No',
    signed: nil,
    original: nil,
    comments: "test",
    rating: 5,
    artist_id: 1,
    medium_id: 1
})
# medium = oil

Artwork.create({
    title: 'Anatomia',
    exhibition: 'porcelains',
    user_owned: 'No',
    signed: nil,
    original: nil,
    comments: "test",
    rating: 5,
    artist_id: 1,
    medium_id: 4
})
# medium = porcelain

Medium.create({
  name: "oil",
  artwork_id: [1, 4, 5]
  })

Medium.create({
  name: "acrylic",
  artwork_id: 2
  })

Medium.create({
  name: "graphite",
  artwork_id: 3
  })

Medium.create({
  name: "porcelain",
  artwork_id: 6
  })
