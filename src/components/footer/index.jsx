import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <h2 className={styles.footerLogoTitle}>
                <span className={styles.bookIcon}>📚</span>
                BookVerse
              </h2>
              <p className={styles.footerLogoSlogan}>
                Onde histórias ganham vida
              </p>
            </div>
            <p className={styles.footerDescription}>
              A BookVerse é uma livraria online que conecta leitores ávidos com
              os melhores e mais diversos livros do mercado.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnHeading}>Links Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>
                <a href="/" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/livros" className={styles.footerLink}>
                  Catálogo
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/ofertas" className={styles.footerLink}>
                  Ofertas
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/sobre" className={styles.footerLink}>
                  Sobre Nós
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/contato" className={styles.footerLink}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnHeading}>Categorias</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>
                <a
                  href="/categoria/ficcao-cientifica"
                  className={styles.footerLink}
                >
                  Ficção Científica
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/categoria/romance" className={styles.footerLink}>
                  Romance
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/categoria/tecnologia" className={styles.footerLink}>
                  Tecnologia
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/categoria/fantasia" className={styles.footerLink}>
                  Fantasia
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/categoria/historia" className={styles.footerLink}>
                  História
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnHeading}>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/bookverse"
                className={styles.socialLink}
              >
                📸 Instagram
              </a>
              <a
                href="https://tiktok.com/@bookverse"
                className={styles.socialLink}
              >
                🎵 TikTok
              </a>
              <a
                href="https://twitter.com/bookverse"
                className={styles.socialLink}
              >
                🐦 Twitter
              </a>
              <a
                href="https://youtube.com/bookverse"
                className={styles.socialLink}
              >
                🎬 YouTube
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2023 BookVerse. Todos os direitos reservados.
          </p>
          <div className={styles.footerPolicies}>
            <a href="/privacidade" className={styles.policyLink}>
              Política de Privacidade
            </a>
            <a href="/termos" className={styles.policyLink}>
              Termos de Uso
            </a>
            <a href="/cookies" className={styles.policyLink}>
              Política de Cookies
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer