import styles from "./header.module.css";

const Header = ({cartItems}) => {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.logoHeading}>
            <span className={styles.bookIcon}>📚</span>
            BookVerse
          </h1>
          <p className={styles.slogan}>Onde histórias ganham vida</p>
        </div>

        <nav className={styles.mainNav}>
          <ul className={styles.navList}>
            <li className={styles.listItem}>
              <a
                href="/"
                className={`${styles.navLink} ${styles.navLinkActive}`}
              >
                Início
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/livros" className={styles.navLink}>
                Livros
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/categorias" className={styles.navLink}>
                Categorias
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/autores" className={styles.navLink}>
                Autores
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/ofertas" className={styles.navLink}>
                Ofertas
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Buscar livros, autores..."
            />
            <button className={styles.searchButton}>🔍</button>
          </div>

          <div className={styles.userActions}>
            <button className={styles.iconButton}>❤️</button>
            <div className={styles.cartWrapper}>
              <button className={styles.iconButton}>🛒</button>
              <span className={styles.cartCount}>{cartItems.length}</span>
            </div>
            <button className={styles.iconButton}>👤</button>
          </div>
        </div>
      </header>
    )
}

export default Header