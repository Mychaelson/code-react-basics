import "./assets/style.css";
import Navbar from "./components/Navbar/Navbar";
import Band from "./components/Band/Band";
import TourSection from "./components/TourSection/TourSection";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "reactstrap";

function App() {
  // hanya bisa return satu component atau tag pembungkus, klo perlu bnayak pembungkus bisa pake tag kosong, khusus react
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            <ContentCard />
          </div>
        </div>
      </div>
      {/* <Jumbotron />
      <Band />
      <TourSection />
      <ClassComponent /> */}
    </>
  );
}

export default App;
