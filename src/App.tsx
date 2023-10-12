import perfil from '@/assets/img/perfil.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import NavigationMenu from './components/NavigationMenu';
import './global.css';
import './styles.css';

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
              </div>
              <h2 className="user-info__name">Juan Carlos Mamani</h2>
              <h4 className="user-info__job">Ingeniero de software</h4>
            </div>
            {/* Menu de navegacion */}
            <NavigationMenu />
            {/* links a redes sociales */}
            <div className="user-info__links">
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
              <a href='#' className='user-info__btn'>
                Descargar CV
              </a>
            </div>
            {/* pie de pagina */}
            <footer className='user-info__footer'>
              &copy; 2024 Juan Carlos Mamani
            </footer>
          </section>
        </aside>
        {/* contenido de la pagina*/}
        <main className='layout__content'>
          <section className='content__page'>
            <h1 className='page__name'>Juan Carlos Mamani</h1>
            <h2 className='page__job'>Desarrollador Web</h2>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
