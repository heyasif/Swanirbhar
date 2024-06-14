const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Course Management API",
            version: "1.0.0",
            description: "API documentation for Course Management in LMS",
        },
        servers: [
            {
                url: "http://localhost:8080", // Update with your actual server URL
            },
        ],
    },
    apis: ["./routes/*.js"], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = app => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
