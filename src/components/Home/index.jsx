import { useState } from "react";
import { categories } from "../../data/categories";
import { produtos } from "../../data/data_produtos";
import styles from "./Home.module.scss";

import Categories from "../../components/Categories";
import SearchField from "../../components/SearchField";
import ProductsList from "../../components/ProductsList";

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Entradas");
    const [filteredData, setFilteredData] = useState(produtos);

    const searchProducts = (text) => {
        const t = text.toLowerCase();
        return produtos.filter(
            (item) =>
                item.nome.toLowerCase().includes(t) ||
                item.descricao.toLowerCase().includes(t)
        );
    };

    const filterByCategory = (category) => {
        return produtos.filter((item) => item.categoria === category);
    };

    const handleSearch = (typedText) => {
        setSearchText(typedText);

        if (typedText.length >= 3) {
            const searchResults = searchProducts(typedText);

            if (selectedCategory) {
                setFilteredData(
                    searchResults.filter(
                        (item) => item.categoria === selectedCategory
                    )
                );
            } else {
                setFilteredData(searchResults);
            }
        } else {
            selectedCategory
                ? setFilteredData(filterByCategory(selectedCategory))
                : setFilteredData(produtos);
        }
    };

    const handleCategory = (category) => {
        setSelectedCategory(category);

        if (searchText.length >= 3) {
            const searchResults = searchProducts(searchText);

            setFilteredData(
                searchResults.filter((item) => item.categoria === category)
            );
        } else {
            setFilteredData(filterByCategory(category));
        }
    };

    return (
        <>
            <Categories
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={handleCategory}
            />

            <SearchField onSearch={handleSearch} />

            <h2 className={styles.home__title}>Cardápio</h2>

            <ProductsList produtos={filteredData} />
        </>
    );
};

export default Home;
