const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Post = require('./models/post')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

const url = process.env.MONGODB_URI

console.log('connecting to', url)

let posts = [
    {
      id: 1,
      content: "Female Civic Engament is important!",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
  ]

  app.get('/', (request, response) => {
      response.send(posts)
  })

  app.get('/api/posts', (request, response) => {
    Post.find({}).then(posts => {
      response.json(posts)
    })  
  })

  app.get('/api/posts/:id', (request, response) => {
    Post.findById(request.params.id).then(post => {
      response.json(post)
    })
  })

  app.delete('/api/posts/:id', (request, response) => {
      const id = Number(request.params.id)
      posts = posts.filter(post => post.id !== id)
      console.log(posts)

      response.status(204).end()
  })

  const generateId = () => {
    const maxId = posts.length > 0
      ? Math.max(...posts.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/posts', (request, response) => {
    const body = request.body
  
    if (body.content === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
  
    const note = new Post({
      content: body.content,
      important: body.important || false,
      date: new Date(),
    })
  
    note.save().then(savedPost => {
      response.json(savedPost)
    })
  })
  
  app.put('/api/posts/:id', (request, response) => {
    
    for (i = 0; i < posts.length; i++){
        if (posts[i].id === Number(request.body.id)){
            posts[i] = request.body
            console.log(posts[i])
        }
    }
    response.json(request.body)
})

const PORT = process.env.PORT || 3002

  app.listen(PORT, () =>{
      console.log(`Server running on port ${PORT}`)
  })