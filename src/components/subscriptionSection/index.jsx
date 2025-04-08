import styles from "./subscriptionSection.module.css";

const SubscriptionSection = () => {
  return (
    <section className={styles.subscriptionSection}>
      <div className={styles.subscriptionContent}>
        <h2 className={styles.subscriptionHeading}>
          Fique por dentro das novidades!
        </h2>
        <p className={styles.subscriptionText}>
          Assine nossa newsletter e receba atualizações sobre novos
          lançamentos, promoções exclusivas e dicas de leitura.
        </p>
        <div className={styles.subscriptionForm}>
          <input
            type="email"
            className={styles.subscriptionInput}
            placeholder="Seu melhor e-mail"
          />
          <button className={styles.subscribeButton}>Assinar</button>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionSection