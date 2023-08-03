import { useBooks } from "../store/useBooks";
import { useWishList } from "../store/useWishList";

export default function WishList() {
    const { wishList } = useWishList();
    const { availableBooks } = useBooks();

    const books = availableBooks.filter((book) => wishList.includes(book.ISBN));
    return (
        <section className="w-3/4 flex flex-col items-center md:ml-auto mx-auto md:mx-0 h-screen">
            {books.length === 0 && (
                <div className="flex flex-col items-center justify-start h-full">
                    <h2 className="text-2xl font-bold">No tienes libros en tu lista de deseos</h2>
                    <p className="text-xl">Agrega libros a tu lista de deseos para verlos aquí</p>
                </div>
            )}
            <ul className="grid grid-flow-row-dense sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-6 h-full">
                {books.map((book) => (
                    <li className="rounded-lg shadow-[2px_3px_0px_rgba(0,0,0,1)] h-96 bg-white flex flex-col items-center 
                        justify-evenly divide-y-2 divide-black border-2 border-solid border-black w-full" key={book.ISBN}>
                        <div className='flex justify-center p-2'>
                            <img src={book.image} alt={`Imagen de un libro de ${book.title}`} className='rounded h-[290px]' />
                        </div>
                        <div className='flex justify-between w-full p-2'>
                            <div className='flex flex-col truncate'>
                                <span className='font-bold truncate'>{book.title}</span>
                                <span>{book.author.name}</span>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}