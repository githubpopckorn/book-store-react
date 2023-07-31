
export default function Header() {
  return (
    <header className="flex h-14 mt-4 mb-4 rounded-lg shadow-xl items-center justify-center bg-white">
      <div className="flex gap-x-2">
        <img src="/public/vite.svg" alt="" />
        <h1 className="text-2xl font-bold text-slate-800">Encuentra tus libros favoritos</h1>
      </div>
    </header>
  )

}