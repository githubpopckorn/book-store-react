import { Link } from 'wouter'
import { useWishList } from '../store/useWishList'
import { useLocation } from 'wouter';
import { ROUTES } from '../constants';

export default function Header() {
  const { wishList } = useWishList()
  const [location] = useLocation();
  console.log()
  return (
    <header className="flex h-14 mt-4 mb-4 rounded-lg shadow-xl items-center justify-center bg-white">
      <div className="flex gap-x-2">
        <img src="/public/vite.svg" alt="" />
        <h1 className="text-2xl font-bold text-slate-800">Encuentra tus libros favoritos</h1>
        <Link href={location === ROUTES.HOME ? ROUTES.WISHLIST : ROUTES.HOME}>
          <button className="p-2 ml-8 bg-violet-600 text-white font-semibold rounded shadow border border-black hover:bg-violet-700
          hover:translate-x-0 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 transform">
            {location === ROUTES.HOME ? 'Lista de deseos' : 'Buscar libros'}
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {wishList.length}
            </div>
          </button>
        </Link>
      </div>
    </header>
  )

}