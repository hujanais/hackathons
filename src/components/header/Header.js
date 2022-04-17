import CTA from './CTA';
import './header.scss';
import Socials from './Socials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h1>Teik Lee</h1>
        <h5>Breath-first-hackathon</h5>
        <h5 className="text-light">Continuous learning through hackathons</h5>
        <CTA />
        <Socials />
        <div className="div-image">
          <img src="https://picsum.photos/id/1018/300/150" alt="mountain" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
