import '../../css/navigation.css'



export function Navigation() {
    return <div >
    <nav id="nav" className="nav header__nav header__nav--home">
      <a className="logo" href="./index.html">
        <svg className="logo__icon" aria-label="Logo">
          <use className="icon-film" href="./img/icons.svg#icon-film"></use>
        </svg>
        <span className="logo__title">Filmoteka</span>
      </a>

      <ul className="pages nav__pages">
        <li className="pages__item">
          <a className="pages__link pages__link--current" href="./index.html"
          >Home</a
          >
        </li>
        <li className="pages__item">
          <a className="pages__link" href="./library.html">My library</a>
        </li>
        <li className="pages__item">
          <button
            type="button"
            className="pages__link pages__link--button"
            data-registration-open
          >Log in
          </button>
        </li>
      </ul>
    </nav>

    
  </div>
}