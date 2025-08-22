import { createIngredient, deleteIngredients, getIngredients } from "@/actions/ingredients";
import { IIngredient } from "@/types/ingredient";
import { create } from "zustand";

interface IngredientState {
    ingredients: IIngredient[];
    isLoading: boolean;
    error: string | null;
    loadIngredients: () => Promise<void>;
    addIngredient: () => Promise<void>;
    removeIngredient: () => Promise<void>;
}

export const useIngredienteStore = create<IngredientState>((set) => ({
    ingredients: [],
    isLoading: false,
    error: null,
    loadIngredients: async () => {
        set({ isLoading: true, error: null })

        try {
            const result = await getIngredients()

            if (result.success) {
                set({ ingredients: result.ingredients, isLoading: false})
            } else {
                set({ error: result.error, isLoading: false})
            }

        } catch (error) {
            console.log("error", error);
            set({ error: "Ошибка при загрузке ингридиентов", isLoading: false })
        }
    },
    addIngredient: async (formData: FormData) => {
        set({ isLoading: true, error: null })
            
        try {
            const result = await createIngredient(formData)

            if (result.success) {
                set((state) => ({
                    ingredients: [...state.ingredients, result.ingredient],
                    isLoading: false
                }))
            } else {
                set({ error: result.error, isLoading: false })
            }
            
        } catch (error) {
            console.log("error", error);
            set({ error: "Ошибка при добавлении ингридиента", isLoading: false })
        }
    },
    removeIngredient: async(id: string) => {
        set({ isLoading: true, error: null })

        try {
            const result = await deleteIngredients(id)

            if (result.success) {
                set((state) => ({
                    ingredients: state.ingredients.filter(
                        (ingredient) => ingredient.id !== id
                    ),
                    isLoading: false
                }))
            } else {
                set({ error: result.error, isLoading: false })
            }

        } catch (error) {
            console.log("error", error);
            set({ error: "Ошибка при удалении ингридиента", isLoading: false })
        }
    }
}))