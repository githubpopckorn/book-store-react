export interface IBook {
    title: string;
    pages: number;
    gender: string;
    image: string;
    ISBN: string;
    year: number;
    author: {
        name: string;
        otherBooks: string[];
    }
}