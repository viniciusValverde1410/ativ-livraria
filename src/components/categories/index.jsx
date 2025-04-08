import styles from "./categories.module.css"
import SectionHeader from "../sectionHeader"

const Categories = ({categories}) => {
    return (
        <section className={styles.categoriesSection}>

        <SectionHeader text={"Ver todas"} title={"Categorias Populares"} viewAllLink={"/categorias"} />

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