// Import the HTTP server library
import express from 'express';

// Create the express app
const app = express()
// Define the port the server will run on
const PORT = 8080

// mock data only - pretend these come from the database
const STUDIES = [
  { id: 1, "name": "study1", "description": "description1" },
  { id: 2, "name": "study2", "description": "description2" },
  { id: 3, "name": "study3", "description": "description3" }
]

// Root route of the server. Just returns a simple message
// if you call http://localhost:8080/ in your browser, you should see "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Another route that returns a list of all studies. This endpoint
// will also accept query parameters to filter the studies.
// Note the use of the async keyword
app.get('/studies', async (req, res) => {
  // Get the study id from the query parameters
  const studyId = req.query.studyId;
  // Call the queryAllStudies function to get the studies
  const studies = await queryAllStudies(studyId)
  // Send the studies as a response
  res.send(studies)
});

// Another route that returns a specific study. This endpoint
// will use a route parameter to get the study id.
// The :id syntax is used to define a route parameter that is dynamically set
// based on the URL. For example, if the URL is /studies/1, then `req.params.id`
// will be set to 1.
app.get('/studies/:id', async (req, res) => {
  // Get the study id from the query parameters
  const studyId = req.params.id;
  // Call the queryAllStudies function to get the studies
  // This time, we're passing the *ROUTE PARAM*
  const studies = await queryAllStudies(studyId)
  // Send the studies as a response
  res.send(studies)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});

// A function mocking a database query. This function will return all studies.
// This function is async because in a real application, the query would be asynchronous.
async function queryAllStudies(id) {

  // If the id is defined BUT not a number, return an empty array
  if (id && !`${id}`.match(/[\d]+/)) {
    return []
  }
  
  // Parse the id as a number
  const idAsNumber = Number(id)

  // If an id is provided, return an array with the study that matches the id
  if (idAsNumber) {
    return STUDIES.filter(study => study.id === idAsNumber)
  }
  // Returns a shallow copy of the studies array
  return [...STUDIES]
};