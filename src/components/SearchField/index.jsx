import styles from "./SearchField.module.scss";
import searchIcon from "../../assets/icons/lupa.png"

const SearchField = ({searchText, onSearch}) => {
    return (
        <div className={styles.search}>
            <img src={searchIcon} className={styles.search__icon} />
            <input
                type="text"
                value={searchText}
                onChange={(e) => onSearch(e.target.value)}
                className={styles.search__input}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    )
};

export default SearchField;