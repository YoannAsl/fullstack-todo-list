import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import { Item } from './models/item';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect('mongodb://localhost:27017/todolist')
    .then(() =>
        app.listen(PORT, () => {
            console.log(
                `⚡️[server]: Server is running at http://localhost:${PORT}`
            );
        })
    )
    .catch((error) => console.error(error));

app.get('/list', async (req, res) => {
    const items = await Item.find({});
    res.send(items);
});

app.post('/list', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
});
