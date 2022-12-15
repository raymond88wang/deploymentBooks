// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: String,
    year: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    imageURL: String
})

// model and export
const Book = mongoose.model('Book', bookSchema)
module.exports = Book