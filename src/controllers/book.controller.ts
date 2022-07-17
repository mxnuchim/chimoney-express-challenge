import {NextFunction, Request, Response} from "express";

export function getBookHandler (req: Request, res: Response){
    return res.send("You have made a GET request to the /api/books endpoint")
}

export function addBookHandler (req: Request, res: Response){
    return res.send("You have made a POST request to the /api/new-book endpoint. This creates a new book")
}

export function updateBookHandler (req: Request, res: Response){
    return res.send("You have made a PUT request to the /api/books/:bookId endpoint. This finds a book using its unique id (usually a number) and updates some information about it")
}

export function deleteBookHandler (req: Request, res: Response){
    return res.send("You have made a DELETE request to the /api/books/:bookId endpoint. This finds a book using its unique id (usually a number) and deletes it")
}