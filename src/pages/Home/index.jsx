import Header from '../../components/Header'
import About from '../../components/About'
import Cards from '../../components/Card'
import Skills from '../../components/Skills'
import Form from '../../components/Form'
import Footer from "../../components/Footer"
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