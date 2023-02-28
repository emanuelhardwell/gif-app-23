import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

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
    </div>
  );
};
