import { useState } from "react";
import { categories } from "../../data/categories";
import { produtos } from "../../data/data_produtos";
import { searchProducts, filterByCategory } from "../../service";
import styles from "./Home.module.scss";

import Categories from "../../components/Categories";
import SearchField from "../../components/SearchField";
import ProductsList from "../../components/ProductsList";

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Entradas");
    const [filteredData, setFilteredData] = useState(produtos);

    const handleSearch = (typedText) => {
        setSearchText(typedText);
        typedText.length >= 3 && setFilteredData(searchProducts(typedText));
        setSelectedCategory("");
    };

    const handleCategory = (category) => {
        setSearchText("");
        setFilteredData(filterByCategory(category))
        setSelectedCategory(category);
    };

    return (
        <>
            <Categories
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={handleCategory}
            />
            <SearchField searchText={searchText} onSearch={handleSearch} />
            <h2 className={styles.home__title}>Cardápio</h2>
            <ProductsList produtos={filteredData} />
        </>
    );
};

export default Home;
