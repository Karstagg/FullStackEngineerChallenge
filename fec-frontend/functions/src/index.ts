import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();
const app = express()
app.use(cors({ origin: true }));
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
            id: doc.data().id,
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

app.post('/addEmployee', async (request, response) => {

  await db.collection('employees').add(request.body).catch((err) => {
    console.error(err);
    return response.status(500).json({ error: err.code});
  })

})

export const webApi = functions.https.onRequest(app)
