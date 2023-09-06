import perfil from '@/assets/img/perfil.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function App() {
  // const variable
  return (
    <>
      <div className="layout">
        {/* barra lateral (info usuario) */}
        <aside className="layout__aside">
          <section className="aside__user-info">
            {/* informacion general usuario */}
            <div className="user-info_general">
              <div className="user-info__container-image">
                <img
                  src={perfil}
                  className="user-info__image"
                  alt="Foto de perfil del usuario"
                />
                <h2 className="user-info__name">Juan Carlos Mamani</h2>
                <h4 className="user-info__job">Ingeniero de software</h4>
              </div>
            </div>
            {/* Menu de navegacion */}
            <nav className='layout__menu'>
              <ul className="menu__list">
                <li className="menu__option">
                  <a href="/" className='menu__link'>
                    <i className="menu__icon fa-solid fa-house"></i>
                    <span className="menu__overlay">Home</span>
                  </a>
                  <a href="/" className='menu__link'>
                    <i className="menu__icon fa-solid fa-user"></i>
                    <span className="menu__overlay">Sobre Mi</span>
                  </a>
                  <a href="/" className='menu__link'>
                    <i className="menu__icon fa-solid fa-graduation-cap"></i>
                    <span className="menu__overlay">Estudios</span>
                  </a>
                  <a href="/" className='menu__link'>
                    <i className="menu__icon fa-solid fa-briefcase"></i>
                    <span className="menu__overlay">Portafolio</span>
                  </a>
                  <a href="/" className='menu__link'>
                    <i className="menu__icon fa-solid fa-book"></i>
                    <span className="menu__overlay">Blog</span>
                  </a>
                  <a href="/" className='menu__link'>
                    <i className="menu__icon fa-solid fa-envelop"></i>

                    <span className="menu__overlay">Contacto</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* links a redes sociales */}
            <div className="uuser-info__links">
              <ul className="links__social">
                <li className="social__option">
                  <a href="#" className='social__link'>
                    <i className='social__icon fa-brands fa-youtube'></i>
                  </a>
                </li>
                <li className="social__option">
                  <a href="#" className='social__link'>
                    <i className='social__icon fa-brands fa-linkedin'></i>
                  </a>
                </li>
                <li className="social__option">
                  <a href="#" className='social__link'>
                    <i className='social__icon fa-brands fa-instagram'></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* boton del curriculum */}
            <div className="user-info__buttons">
              <a href='#' className='user-info__button'>
                Descargar CV
              </a>
            </div>
            {/* pie de pagina */}
            <footer className='user-info__footer'>
              &copy; 2024 Juan Carlos Mamani
            </footer>
          </section>
        </aside>

      </div>
    </>
  )
}

export default App
