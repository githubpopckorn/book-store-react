import { create } from 'zustand'
import { IBook } from '../domain/book'
import { IFilter } from '../domain/filter'
import { getBooks, getGeneres } from '../services/books.service'

export interface IBooksStore {
    availableBooks: IBook[];
    filteredBooks: IBook[];
    filter: IFilter;
    genderes: { value: string, label: string }[];
    setBooks: (availableBooks: IBook[]) => void;
    setFilter: (filter: IFilter) => void;
    setFilteredBooks: (filteredBooks: IBook[]) => void;
}

export const useBooks = create<IBooksStore>((set) => ({
    availableBooks: getBooks(),
    filteredBooks: getBooks(),
    filter: {
        title: '',
        gender: '',
        newest: true,
        pages: 0
    },
    genderes: getGeneres(),
    setBooks: (availableBooks: IBook[]) => set({ availableBooks }),
    setFilter: (filter: IFilter) => set(state => {
        let books = state.availableBooks;

        if (filter.title !== '') {
            books = books.filter(book => book.title.toLowerCase().includes(filter.title.toLowerCase()))
        }

        if (filter.gender !== '') {
            books = books.filter(book => book.gender === filter.gender);
        }

        books = books.filter(book => book.pages >= filter.pages);

        if (filter.newest) {
            books = books.sort((a, b) => b.year - a.year);
        } else {
            books = books.sort((a, b) => a.year - b.year);
        }
        return { filter, filteredBooks: books }
    }),
    setFilteredBooks: (filteredBooks: IBook[]) => set({ filteredBooks })
}))