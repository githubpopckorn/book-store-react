import './App.css'
import { Route } from 'wouter'
import WishList from './components/WishList'
import BooksGrid from './components/BookGrid'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { ROUTES } from './constants'

function App() {

  console.log(ROUTES.HOME)
  return (
    <section className='container mx-auto font-montserrat flex-col'>
      <Header />
      <main className='flex gap-x-4 flex-col md:flex-row'>
        <NavBar />

        <Route path={ROUTES.HOME}>
          <BooksGrid />
        </Route>
        <Route path={ROUTES.WISHLIST}>
          <WishList />
        </Route>
      </main>
    </section>
  )
}

export default App
