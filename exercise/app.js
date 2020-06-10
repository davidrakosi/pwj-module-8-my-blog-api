const express = require('express');
const app = express();
const Post = require('./api/models/posts');
const postsData = new Post();

const port = 8080

app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.get('/api/posts', (req, res) => {
    res.status(200).send(postsData.get())
})

let postId
app.get(`/api/posts/${postId}`, (req, res) => {
    res.status(200).send(postsData.getIndividualBlog(postId))
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`))