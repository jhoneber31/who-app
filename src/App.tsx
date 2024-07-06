import { AppRouter } from "./router/AppRouter"
import { Footer } from "./who/components/Footer/Footer"
import { Navbar } from "./who/components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <AppRouter/>
      </main>
      <Footer/>
    </>
  )
}

export default App
