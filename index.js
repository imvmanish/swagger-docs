const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Swagger Config
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/',(req,res) => {
    res.status(200).json({homepage: 'index.js'});
});

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});