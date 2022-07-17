import {Express} from "express";
import {
    getBookHandler,
    addBookHandler,
    updateBookHandler,
    deleteBookHandler
} from "./controllers/book.controller";

function routes(app: Express){
    /**
     * @openapi
     * /api/books:
     *  get:
     *      tags:
     *      - Get books
     *      summary: Gets all books from db
     *      description: gets a list of all books
     *      responses:
     *          200:
     *              description: App is up and running
     */
    app.get("/api/books", getBookHandler)

   /**
   * @openapi
   * '/api/new-book':
   *  post:
   *     tags:
   *     - Add book
   *     summary: Add a book
   *     requestBody:
   *      content:
   *        application/json:
   *           schema:
   *            properties:
   *                id:
   *                    type: integer
   *                    default: 1
   *                name:
   *                    type: string
   *                    default: Book1
   *     responses:
   *      200:
   *           description: success
   *           content:
   *            application/json::
   *                schema:
   *                 properties:
   *                    id:
   *                        type: integer
   *                    name:
   *                        type: string
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
    app.post("/api/new-book", addBookHandler);

    app.put("/api/books/:bookId", updateBookHandler);

    app.delete("/api/books/:bookId", deleteBookHandler);
}

export default routes;