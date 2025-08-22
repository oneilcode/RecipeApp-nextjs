// import { object, string } from "zod"
 
// export const signInSchema = object({
//   email: string({ required_error: "Email is required" })
//     .min(1, "Email is required")
//     .email("Invalid email"),
//   password: string({ required_error: "Password is required" })
//     .min(1, "Password is required")
//     .min(6, "Password must be more than 6 characters")
//     .max(32, "Password must be less than 32 characters"),
// })


import { object, string, number } from "zod"
import { z } from "zod"

export const signInSchema = object({
  email: string()
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string()
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const ingredienSchema = object({
 name: string().min(1, "Название обязательно"),
 category: z.enum([
  "VEGETABLES",
  "FRUITS",
  "MEAT",
  "DAIRY",
  "SPICES",
  "OTHER"
 ]),
 unit: z.enum(["GRAMS", "KILOGRAMS", "LITERS", "MILLILITERS", "PIECES"]),
 pricePerUnit: number()
 .min(0, "Цена должны быть положительной")
 .nullable(),
 description: z.string().optional()
})