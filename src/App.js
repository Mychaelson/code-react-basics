import "./assets/style.css";
import Navbar from "./components/Navbar/Navbar";
import Band from "./components/Band/Band";
import TourSection from "./components/TourSection/TourSection";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "reactstrap";

function App() {
  // hanya bisa return satu component atau tag pembungkus, klo perlu bnayak pembungkus bisa pake tag kosong, khusus react
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Band />
      <TourSection />
    </>
  );
}

export default App;
