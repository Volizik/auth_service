const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
app.use(express.json());
app.use('/', router);

const start = async () => {
    try {
        await mongoose
            .connect(
                `mongodb+srv://volizik:volizik1719@cluster0.ceuth.mongodb.net/TalkByTags?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                }
            );
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (e) {
        console.error(e)
    }
}
start();