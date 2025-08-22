"use client" 

import IngredientsTable from "@/components/UI/tables/Ingredients";
import IngredientForm from "@/forms/ingredient.form";

const IngredientsPage = () => {

    return (
      <>
         <IngredientForm />
         <IngredientsTable />
      </>
    );
  };

  export default IngredientsPage  