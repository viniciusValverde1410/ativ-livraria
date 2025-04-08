import styles from "./sectionHeader.module.css";

const SectionHeader = ({ title, viewAllLink, text }) => {
    return (
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>{title}</h2>
            <a href={viewAllLink} className={styles.viewAll}>
                {text}
            </a>
        </div>
    )
}

export default SectionHeader