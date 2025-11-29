import styles from "./Card.module.scss";

const Card = ({nome, categoria, preco, descricao, imagem}) => {
    return (
        <div className={styles.card}>
            <img src={imagem} alt={nome} className={styles.card__img} />
            <div className={styles.card__content}>
                <h2 className={styles.card__title}>{nome}</h2>
                <h3 className={styles.card__subtitle}>{categoria}</h3>
                <p className={styles.card__desc}>{descricao}</p>
            </div>
            <span className={styles.card__price}>R$ {preco.toFixed(2).replace('.', ',')}</span>
        </div>
    )
};

export default Card;