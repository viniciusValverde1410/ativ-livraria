import styles from "./categories.module.css"

const Categories = ({categories}) => {
    return (
        <section className={styles.categoriesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Categorias Populares</h2>
          <a href="/categorias" className={styles.viewAll}>
            Ver todas
          </a>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categoria/${category.id}`}
              className={styles.categoryCard}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </a>
          ))}
        </div>
      </section>
    )
}

export default Categories 