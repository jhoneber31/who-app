import { AppRouter } from "./router/AppRouter"
import { Footer } from "./who/components/Footer/Footer"
import { Navbar } from "./who/components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <section>
        <AppRouter/>
      </section>
      <Footer/>
    </>
  )
}

export default App
