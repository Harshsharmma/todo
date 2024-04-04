import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItems }) => {
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day</p>
  );
};

export default WelcomeMessage;
