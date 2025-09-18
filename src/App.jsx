import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row mb-1">
            <div className="col-12">
              <Header />
            </div>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="row">
                    <div className="col-12">
                      <Slider />
                    </div>
                  </div>

                  <div className="container my-2 gap-5">
                    <div className="row mb-2">
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          imgSrc="/images/react.png"
                          title="React"
                          text=" Some quick example text to build on the card title and make up the
            bulk of the card’s content."
                          btnText="Explore"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          imgSrc="/images/u.png"
                          title="Mysql"
                          text=" Some quick example text to build on the card title and make up the
            bulk of the card’s content."
                          btnText="Explore"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          imgSrc="/images/h.png"
                          title="Node js"
                          text=" Some quick example text to build on the card title and make up the
            bulk of the card’s content."
                          btnText="Explore"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          imgSrc="/images/a.png"
                          title="Java"
                          text=" Some quick example text to build on the card title and make up the
            bulk of the card’s content."
                          btnText="Explore"
                        />
                      </div>
                    </div>
                  </div>
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />} />
          </Routes>

          <div className="row">
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
