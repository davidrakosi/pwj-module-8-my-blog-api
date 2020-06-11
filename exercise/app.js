const express = require('express');
const app = express();
const Post = require('./api/models/posts');
const postsData = new Post();

const port = 3000

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.get('/api/posts', (req, res) => {
    res.status(200).send(postsData.get())
})

app.get('/api/posts/:post_id', (req, res) => {
    const postId = req.params.post_id
    console.log(postId)
    const foundPost = postsData.getIndividualBlog(postId)
    if (foundPost) {
        res.status(200).send(foundPost)
    } else {
        res.status(404).send('Not found')
    }
    res.status(200).send(postsData.getIndividualBlog(postId))
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`))