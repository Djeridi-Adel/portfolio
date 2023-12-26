import Header from '../Header'
import About from '../About'
import Cards from '../Card'
import Form from "../Form"
import Footer from '../Footer'
import '../../utils/style/home.css'


function Home() {
  return (
    <div className="App">
      <Header />
      <About />
      <Cards />
      <Form />
      <Footer />
    </div>
  )
}

export default Home