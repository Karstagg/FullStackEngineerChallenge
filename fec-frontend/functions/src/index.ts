import * as functions from 'firebase-functions'
import * as express from 'express'
import {getAllEmployees} from '../apis/employees'
const app = express();

app.get('/employees', getAllEmployees);
export const api = functions.https.onRequest(app);
