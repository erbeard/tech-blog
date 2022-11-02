const { Post } = require('../models');

const postData = [
    {
        title: "Opendoor lays off about 550 employees, or 18% of its workforce",
        content: "Opendoor is letting go of about 550 people, or 18% of the company, across all functions, its co-founder and CEO Eric Wu announced in a blog post today.",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;