
import styles from "./CategoryButton.module.scss";

const CategoryButton = ({ icon, label, onClick, isActive }) => {
    return (
        <button onClick={onClick} className={`${styles.category__btn} ${isActive ? styles["category__btn--active"] : ""
            }`}>
            <img src={icon} alt={label} className={styles.category__icon} />
            <span className={styles.category__label}>{label}</span>
        </button>
    );
};

export default CategoryButton;
