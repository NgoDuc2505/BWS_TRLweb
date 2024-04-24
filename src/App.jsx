import Content from "./components/Content/Content"
import Carousel from "./components/Courousel/Carousel"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SubHead from "./components/Sub-header/SubHead"


function App() {
  return (
    <div>
      {/* Hung */}
      <Header></Header>
      <SubHead></SubHead>
      {/* duy */}
      <Carousel></Carousel>
      {/* Quan */}
      <Content></Content>
      {/* Duc */}
      <Footer></Footer>
      {/* Login
      Register */}
    </div>
  )
}

export default App
