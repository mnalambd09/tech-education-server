const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('TECH SCHOOL API Running.... ');
});

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.listen(port, () => {
    console.log('Tech School server is running on port 5000', port);
})