import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CategoriesContext = createContext();
const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get("/api/categories");
        setCategories(categoriesResponse.data.categories);
      } catch (err) {
        console.log("error in fetching categories", err.message);
      }
    };
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};
