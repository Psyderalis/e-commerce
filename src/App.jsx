import './App.css'
import Products from './pages/Products'
import Nav from './components/Nav'
import Footer from './components/Footer'

// SE UNIFICAN LOS COMPONENTES Y PAGES 
// Router

function App() {

  return (
    <div>
      <Nav />
      <div>
        <Products />
      </div>
      <Footer />
    </div>
  )
}

export default App
