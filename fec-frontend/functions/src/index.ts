import * as functions from 'firebase-functions'
import * as express from 'express'

import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();
const app = express()

app.get('/employees', (request, response) => {
  db.collection('employees')
      .orderBy('createdAt', 'desc')
      .get()
      .then((data) => {
        let employees = [];
        data.forEach((doc) => {
          employees.push({
            id: doc.id,
            email: doc.data().email,
            name: doc.data().name,
            createdAt: doc.data().createdAt,
            isAdmin: doc.data().isAdmin
          });
        });
        //for demo
        response.set('Access-Control-Allow-Origin', '*');
        return response.json(employees);
      })
      .catch((err) => {
        console.error(err);
        response.set('Access-Control-Allow-Origin', '*');
        return response.status(500).json({ error: err.code});
      });
})

export const webApi = functions.https.onRequest(app)
