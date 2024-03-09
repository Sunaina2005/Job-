const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@job-finder-pro.lumitto.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function startServer() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log('Connected to MongoDB!');

    // Ensure that the client is connected before defining routes
    app.post('/post-jobs', async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();

      try {
        const database = client.db('job-finder-pro');
        const jobsCollections = database.collection('jobs');

        const result = await jobsCollections.insertOne(body);
        return res.status(200).send(result);
      } catch (error) {
        console.error(error);
        return res.status(500).send({
          message: 'Internal Server Error',
          status: false,
        });
      }
    });

    app.get('/all-jobs', async (req, res) => {
      try {
        const database = client.db('job-finder-pro');
        const jobsCollections = database.collection('jobs');
        const jobs = await jobsCollections.find({}).toArray();
        res.send(jobs);
      } catch (error) {
        console.error(error);
        res.status(500).send({
          message: 'Internal Server Error',
          status: false,
        });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (error) {
    console.error(error);
  }
}

startServer();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
