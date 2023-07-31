import './App.css'
import BooksGrid from './components/BookGrid'
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {

  return (
    <section className='container mx-auto font-montserrat flex-col'>
      <Header />
      <div className='flex gap-x-4 flex-col md:flex-row'>
        <NavBar />
        <BooksGrid />
      </div>
    </section>
  )
}

export default App
