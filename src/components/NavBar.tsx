import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ChangeEvent } from "react"
import Select, { SingleValue } from 'react-select'
import { IFilter } from "../domain/filter"
import { useBooks } from '../store/useBooks'
import { useWishList } from '../store/useWishList'

export interface Props {
    filter: IFilter,
    genderes: { value: string, label: string }[],
    setFilter: (filter: IFilter) => void
}

export default function NavBar() {
    const { filter, setFilter, genderes } = useBooks()
    const { wishList } = useWishList()

    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        let value: string | boolean = e.target.value;
        if (name === 'newest') value = e.target.value === 'newest'

        setFilter({
            ...filter,
            [name]: value
        })
    }

    const handleChangeSelect = (e: SingleValue<{ value: string, label: string }>) => {
        setFilter({
            ...filter,
            gender: e?.value || ''
        })
    }

    const resetFilter = () => {
        setFilter({
            title: '',
            gender: '',
            newest: true,
            pages: 0
        })
    }

    return (
        <nav className="w-full md:w-[25%] lg:w-1/5 mb-6 bg-slate-200 rounded-lg shadow-lg md:h-96 md:fixed">
            <section className="p-2">
                <h2>Libros</h2>
                <small className="font-light">15 unidades</small>
            </section>
            <section className="flex flex-col px-2 justify-evenly h-[20rem] w-full">
                <label className="my-1">
                    <span className="font-bold">Titulo</span>
                    <div className="w-full rounded shadow p-2  flex gap-x-2 bg-white">
                        <MagnifyingGlassIcon className="w-6 h-6" />
                        <input type="text" name="title" onChange={handleFilter} className="w-full outline-none" placeholder="Harry Potter" />
                    </div>
                </label>

                <label className="my-1">
                    <span className="font-bold">Género</span>
                    <Select options={genderes} onChange={handleChangeSelect} name="gender" className="shadow outline-none" placeholder="Selecciona un género" defaultValue={genderes[0]}/>
                </label>
                <label className="my-1">
                    <span className="font-bold">Ordenar por</span>
                    <div className="flex gap-x-2 felx-col md:flex-col lg:flex-row">
                        <label className="flex items-center gap-x-2">
                            <input type="radio" name="newest" onChange={handleFilter} checked={filter.newest} value={"newest"} />
                            <span>Nuevos</span>
                        </label>
                        <label className="flex items-center gap-x-2">
                            <input type="radio" name="newest" onChange={handleFilter} checked={!filter.newest} value={"oldest"} />
                            <span>Antiguos</span>
                        </label>
                    </div>
                </label>
                <label className="my-1 flex flex-col mb-2">
                    <span className="font-bold">Páginas mayores a {filter.pages}</span>
                    <input type="range" name="pages" onChange={handleFilter} min={100} max={1000} value={filter.pages} />
                </label>
                <button onClick={resetFilter}
                    className="shadow-[2px_3px_0px_rgba(0,0,0,1)] bg-white p-2 rounded 
                    border border-black 
                    hover:shadow-[3px_4px_0px_rgba(0,0,0,1)] hover:translate-x-0 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 transform">
                    Reiniciar filtros
                </button>
            </section>
            <section>
                <ul>
                    {wishList.map((ISBN) => (
                        <li key={ISBN}>{ISBN}</li>
                    ))}
                </ul>
            </section>

        </nav>
    )
}