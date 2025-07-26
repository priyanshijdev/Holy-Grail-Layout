import "./styles.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Content from "./component/Content";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="columns">
        <Navbar />
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
