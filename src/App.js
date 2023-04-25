import {Navbar} from "components/navbar/navbar"
import {NavRoutes} from 'routes/routes'
import {Footer} from "components/footer/footer"
import Background from 'images/pattern_fondo.jpg'

function App() {
  
  return (
    <div style={{ background: `url(${Background})` }}>
      <Navbar />
        <hr className="spacebox" />
        <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;