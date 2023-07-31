import { useBooks } from "../store/useBooks";
import { useWishList } from "../store/useWishList";

export default function BooksGrid() {
  const { filteredBooks } = useBooks()
  const { addBook, removeBook, wishList } = useWishList()

  return (
    <section className="w-3/4 flex flex-col items-center md:ml-auto mx-auto md:mx-0">
      <ul className="grid grid-flow-row-dense sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-6">
        {filteredBooks.map((book) => (
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
              <div className="flex ml-2">
                {wishList.includes(book.ISBN) ? (
                  <button onClick={() => removeBook(book.ISBN)}
                    className="bg-red-500 shadow-[2px_3px_0px_rgba(0,0,0,1)]p-1 rounded border border-black px-2 font-bold text-white hover:bg-red-600
                    hover:translate-x-0 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 transform">
                    Quitar
                  </button>
                ) : (
                  <button onClick={() => addBook(book.ISBN)}
                    className="bg-violet-500 shadow-[2px_3px_0px_rgba(0,0,0,1)] p-1 rounded border border-black font-bold text-white hover:bg-violet-600
                    hover:translate-x-0 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 transform">
                    Agregar
                  </button>
                )}

              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>

  )
}