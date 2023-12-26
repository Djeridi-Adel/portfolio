import Header from '../Header'
import About from '../About'
import Cards from '../Card'
import Skills from '../Skills'
import Footer from '../Footer'
import Form from "../Form"
import '../../utils/style/home.css'


function Home() {
  return (
    <div className="App">
      <Header />
      <About />
      <Cards />
      <Skills />
      <Form />
      <Footer />
    </div>
  )
}

export default Home