"use client"

import { useAuthStore } from "@/store/auth.store"
import { useIngredienteStore } from "@/store/ingredient.store"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

interface IProps {
    children: React.ReactNode
}

const AppLoader = ({ children }: IProps) => {
    const { data: session, status } = useSession()
    const { loadIngredients } = useIngredienteStore()
    const { isAuth, setAuthState } = useAuthStore()

    useEffect(() => {
        setAuthState(status, session)
    }, [status, session, setAuthState])


    useEffect(() => {
        if (isAuth) {
            loadIngredients()
        }
    }, [isAuth, loadIngredients])

    return <> {children} </>

}

export default AppLoader