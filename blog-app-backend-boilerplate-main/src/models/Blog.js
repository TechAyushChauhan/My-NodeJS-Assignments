const mongooose = require('mongoose');
// Mongo Schema- :
// Database Name- :Blog
// There will be only one collection inside database Blog
// Collection Name- :blog
// Feilds in collection blog- :
// 1. ObjectID
// 2. topic
// 3. description
// 4. posted_at
// 5. posted_by


const blogSchema = new mongooose.Schema({
    "topic":String,
    "description":String,
    "posted_at":String,
    "posted_by":String
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;