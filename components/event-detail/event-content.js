import styles from "./event-content.module.scss";

function EventContent({ children }) {
  return <section className={styles.content}>{children}</section>;
}

export default EventContent;
