
//نفهمیدم چی شد
import { NextPage } from "next"

class Book {
    title: string
    auther: string
    isbn: string

    constructor(title: string, auther: string, isbn: string) {
        this.title = title
        this.auther = auther
        this.isbn = isbn
    }
}

const books: string[] = [] //قرار است کتابهای غیر تکراری در این باشد
const bookList = [] // قرار است لیست تمام کتاب ها باشد

const createBook = (title: string, auther: string, isbn: string) => {
    const book = new Book(title, auther, isbn)
    books[isbn] = book
    return book
}

const addBook = (title: string, auther: string, isbn: string, availability: boolean, price: string) => {
    const book = {
        ...createBook(title, auther, isbn),
        availability,
        price
    }
    bookList.push(book)
    return book
}

const Flyweight: NextPage = () => {

    return (
        <>
        </>
    )
}

export default Flyweight