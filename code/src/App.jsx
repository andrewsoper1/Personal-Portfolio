import { Outlet } from 'react-router-dom';
import Nav from './components/header';
import Footer from  './components/footer';


function App() {
  

  return (
    <>
      <Nav />
      <main className="container pt-5 pb-5">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
