const mongoose = require('mongoose')
//MONGODB_URI=mongodb+srv://vikasraria:raria123@cluster0.hn0ao6n.mongodb.net/?retryWrites=true&w=majority
//const url = process.env.MONGODB_URI
const url=`mongodb+srv://vikasraria:raria123@cluster0.hn0ao6n.mongodb.net/?retryWrites=true&w=majority`;
console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const personSchema=new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        required:true
    },
    number:{ 
        type:String,
        minLength:3,
        required:true
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports=mongoose.model('Person',personSchema);