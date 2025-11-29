import CategoryButton from '../CategoryButton';
import styles from './Categories.module.scss';

const Categories = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className={styles.categories}>
        {categories.map((cat )=> (
            <CategoryButton
            key={cat.id}
            icon={cat.icon}
            label={cat.label}
            onClick={() => onSelect(cat.label)}
            isActive={selectedCategory === cat.label}
            />
        ))}
    </div>
  );
};

export default Categories;
