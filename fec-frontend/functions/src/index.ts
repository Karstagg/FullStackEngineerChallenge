import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();
const app = express()

// for demo, should be locked down to a specific url
app.use(cors({ origin: 'https://employee-reviewer-f9da9.web.app/' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/employees', (request, response) => {
  db.collection('employees')
      .orderBy('name', 'desc')
      .get()
      .then((data) => {
        let employees = [];
        data.forEach((doc) => {
          employees.push({
            id: doc.id,
            email: doc.data().email,
            name: doc.data().name,
            admin: doc.data().admin
          });
        });
        return response.json(employees);
      })
      .catch((err) => {
        console.error(err);
        return response.status(500).json({ error: err.code});
      });
})

app.post('/addEmployee', (request, response) => {

  db.collection('employees').add(request.body).then((docRef) => {
    return response.status(200)
  }).catch((err) => {
    console.error(err);
    return response.status(500).json({ error: err.code});
  })

})

app.post('/addReview', (request, response) => {
  const {
    id: employeeId,
    formData: review
  } = request.body
  db.collection('employees').doc(employeeId).collection('reviews').add(review).then((docRef) => {
    return response.status(200)
  }).catch((err) => {
    console.error(err);
    return response.status(500).json({ error: err.code});
  })

})

app.post('/getReviewsByUser', (request, response) => {
  const {
    id: employeeId,
  } = request.body
  db.collection('employees').doc(employeeId).collection('reviews').orderBy('title', 'desc').get().then((data) => {
    let reviews = [];
    data.forEach((doc) => {
      reviews.push({
        id: doc.id,
        reviewers: doc.data().reviewers,
        title: doc.data().title,
      });
    });
    return response.json(reviews);
  }).catch((err) => {
        console.error(err);
        return response.status(500).json({ error: err.code});
      });
})

export const webApi = functions.https.onRequest(app)
