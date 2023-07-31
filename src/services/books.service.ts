import books from '../data/books.json';
import { IBook } from '../domain/book';

export function getBooks(): IBook[] {
    const availableBooks = books.library.map(item => {
        return {
            title: item.book.title,
            pages: item.book.pages,
            gender: item.book.genre,
            image: item.book.cover,
            ISBN: item.book.ISBN,
            year: item.book.year,
            author: {
                name: item.book.author.name,
                otherBooks: item.book.author.otherBooks
            }
        }
    })
    return availableBooks.sort((a: IBook, b: IBook) => b.year - a.year);
}

export function getGeneres(): { value: string, label: string }[] {
    const genderes = getBooks().map(item => item.gender)
        .filter((value, index, self) => self.indexOf(value) === index);

    const mappedValues = genderes.map(item => {
        return {
            value: item,
            label: item
        }
    })

    return [ { value: '', label: 'Todos' }, ...mappedValues,]

}