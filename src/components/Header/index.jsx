import styles from './Header.module.scss'
import banner from '../../assets/images/banner.png';

const Header = () => {
  return (
    <header className={styles.header} style={{ backgroundImage: `url(${banner})` }}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>RESTAURANT</h1>
        <p className={styles.header__text}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
      </div>
    </header>
  )
}

export default Header;
