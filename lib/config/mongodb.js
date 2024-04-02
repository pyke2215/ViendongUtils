const mongoose = require('mongoose');


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pyke22154041e:fullhose159@cluster0.ylikqb6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

async function run_db_server() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri)
    .then(console.log("connect db successfully"))
    // Send a ping to confirm a successful connection
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch(error){
    console.log({error})
  }
}
module.exports = {run_db_server};
// const mongoose = require('mongoose');

// // MongoDB Atlas connection URI
// const uri = "mongodb+srv://pyke22154041e:fullhose159@cluster0.ylikqb6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Connect to MongoDB using Mongoose
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Error connecting to MongoDB:', err));

// Export the Mongoose connection

