import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "bob esponja",
    "patricio",
    "calamardo",
  ]);

  const addNewCategory = (category) => {
    setCategories([category, ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(category) => addNewCategory(category)} />
    </div>
  );
};
