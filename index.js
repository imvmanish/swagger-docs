const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Swagger Config
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const courses = [
    {
        id: 1,
        name: 'Learn ReactJS',
        price: 299
    },
    {
        id: 2,
        name: 'Learn NodeJS',
        price: 199
    },
    {
        id: 3,
        name: 'Learn Angular JS',
        price: 2099
    },
]

app.get('/',(req,res) => {
    res.status(200).json({homepage: 'index.js'});
});

app.get('/api/v1/lco',(req,res) => {
    res.status(200).send("hello from lco docs");
});

app.get('/api/v1/lcoobject',(req,res) => {
    res.status(200).json({id: 35,name: "Django",price: 2699});
});

app.get('/api/v1/lcoarray',(req,res) => {
    res.status(200).json({courses});
});

app.get('/api/v1/course/:id',(req,res) => {
    const myCourse = courses.find(course => Number(course.id) === Number(req.params.id));
    res.status(200).json({myCourse});
});

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});