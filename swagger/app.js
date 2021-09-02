const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      description: "Library API Information",
      version: "1.0",
    },
  },
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *        description: A successful response
 *
 */

app.get("/books", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Book 1",
    },
    {
      id: 2,
      title: "Book 2",
    },
    {
      id: 3,
      title: "Book 3",
    },
  ]);
});

/**
 * @swagger
 * /books:
 *   post:
 *     description: Create a new book
 *     parameters:
 *      - name: title
 *        description: titulo del libro
 *        in: formData
 *        required: true
 *        type: string
 *      - name: description
 *        description: descripcion del libro
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *        description: Book Created with success
 *
 */

app.post("/books", (req, res)=>{
    res.status(201).send({
        message: "Book added successfully"
    });
})

app.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
});
