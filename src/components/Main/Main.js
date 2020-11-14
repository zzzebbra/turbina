import React from 'react';
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Player from '../Player/Player';
import "../../blocks/main/main.css";

function Main() {

  const [isHidden, setIsHidden] = React.useState(true);

  function handleVisible() {
    setIsHidden(!isHidden)
  }

  return (
    <section className="main">
        <Header isHidden={isHidden} handleVisible={handleVisible} />
        <Logo />
      <Player isHidden={isHidden} />
      <About />
      <Footer />
    </section>
  );
}

export default Main;
