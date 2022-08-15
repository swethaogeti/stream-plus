import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filter, dispatchFilter] = useReducer(filterReducer, {
    category: "All",
  });
  return (
    <FilterContext.Provider value={{ filter, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
export const useFilterContext = () => {
  return useContext(FilterContext);
};
