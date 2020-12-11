const express = require('express');
const mongoose = require('mongoose');

const router = require('./router');
const { db_url, port } = require('./config');

const app = express();
app.use(express.json());
app.use('/', router);

const start = async () => {
    try {
        await mongoose
            .connect(
                db_url,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                }
            );
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    } catch (e) {
        console.error(e)
    }
}
start();