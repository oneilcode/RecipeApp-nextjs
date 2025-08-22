"use client" 

import IngredientsTable from "@/components/UI/tables/Ingredients";
import IngredientForm from "@/forms/ingredient.form";
import { useAuthStore } from "@/store/auth.store";

const IngredientsPage = () => {
  const { isAuth } = useAuthStore()

  if(!isAuth) {
    return <p>Пожалуйста, авторизуйтесь!</p>
  }

    return (
      <>
         <IngredientForm />
         <IngredientsTable />
      </>
    );
  };

  export default IngredientsPage  