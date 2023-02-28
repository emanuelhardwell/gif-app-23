import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["bob esponja"]);

  const addNewCategory = (category) => {
    if (categories.includes(category)) {
      console.log("Categoria duplicada");
      return;
    }
    setCategories([category, ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(category) => addNewCategory(category)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
