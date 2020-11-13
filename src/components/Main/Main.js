import Player from '../Player/Player';
import Header from '../Header/Header';
// import Logo from './'
import "./main.css";

function Main() {
  return (
    <section className="main">
        <Header />
        {/* <Logo /> */}
      <Player />
    </section>
  );
}

export default Main;
