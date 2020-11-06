import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import "./main.css";

function Main() {
  return (
    <section className="main">
      <div className="wrapper">
        <Header />
        <Logo />
      </div>
      <Footer />
    </section>
  );
}

export default Main;
