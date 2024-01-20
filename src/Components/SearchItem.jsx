import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data"; // Assuming you have a file with your data named Data.js
import Product from "./Product";



const SearchItem = ({cart,setCart}) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = items.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );

    setFilterData(filteredData);
    console.log(filteredData);
  }, [term]);

  return (
    <div>
      <Product cart={cart} setCart={setCart} items={filterData}/>
    </div>
  );
};

export default SearchItem;
