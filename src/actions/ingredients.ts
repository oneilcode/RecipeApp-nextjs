"use server"

import { ingredienSchema } from "@/schema/zod";
import prisma from "@/utils/prisma";
import { success, ZodError } from "zod";

export async function createIngredient(formData: FormData) {
    try {

        const data = {
            name: formData.get("name") as string,
            category: formData.get("category") as string,
            unit: formData.get("unit") as string,
            pricePerUnit: formData.get("pricePerUnit")
                ? parseFloat(formData.get("pricePerUnit") as string)
                : null,
            description: formData.get("description") as string
        }

        const validatedData = ingredienSchema.parse(data)

        const ingredient = await prisma.ingredient.create({
            data: {
                name: validatedData.name,
                category: validatedData.category,
                unit: validatedData.unit,
                pricePerUnit: validatedData.pricePerUnit,
                description: validatedData.description
            }
        })

        return { success: true, ingredient }
        
    } catch (error) {
        // if(error instanceof ZodError) {
        //     return { error: error.errors.map((e) => e.message).join(", ")}
        // }

        console.error("Ошибка создания ингридиента:", error)
        return {error: "Ошибка создания ингридиента"}
    }
} 

export async function getIngredients() {
    try {
        const ingredients = await prisma.ingredient.findMany()

        return { success: true, ingredients }
    } catch (error) {
        console.error("Ошибка получения ингридиентов:", error)
        return {error: "Ошибка при получении ингридиентов"}
    }
    
}

export async function deleteIngredients(id: string) {
    try {
        const ingredient = await prisma.ingredient.delete({
            where: { id }
        })

        return { success: true, ingredient }
    } catch (error) {
        console.error("Ошибка удаления ингридиента:", error)
        return {error: "Ошибка при удалении ингридиента"}
    }
}