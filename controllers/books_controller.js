const express = require('express')
const book = express.Router()
const Book = require('../models/book.js')
const bookSeedData = require('../models/book_seed.js')

// Index: 
book.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.send(foundBooks)
        })
})

// Seed: 
book.get('/seed', (req, res) => {
    Book.insertMany(bookSeedData)
        .then(success => {
            res.send("Books seeded successfully")
        })
})

module.exports = book
