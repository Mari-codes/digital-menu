import Card from "../Card";
import styles from "./ProductsList.module.scss";

const ProductsList = ({ produtos }) => {
  return (
    <div className={styles.productsList}>
      {produtos.map(item => (
        <Card
          key={item.id}
          nome={item.nome}
          categoria={item.categoria}
          preco={item.preco}
          descricao={item.descricao}
          imagem={item.imagem}
        />
      ))}
    </div>
  );
};

export default ProductsList;