import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Player from './Player/Player';
import "./main.css";

function Main() {
  return (
    <section className="main">
      <div className="wrapper">
        <Header />
        <Logo />
      </div>
      <Player />
      <About />
      <Footer />
    </section>
  );
}

export default Main;
