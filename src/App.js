import "../src/css/bootstrap.css";
import "../src/css/style.css";
import "../src/css/responsive.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Book from "./components/Book";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Banner />
      <Menu />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
