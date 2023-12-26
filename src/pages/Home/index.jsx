import Header from '../../components/Header'
import About from '../../components/About'
import Cards from '../../components/Card'
import Footer from "../../components/Footer"
import Form from '../../components/Form'
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