"use client"

import { Form } from '@heroui/form';
import { Button, Input } from '@heroui/react';
import React, { useState } from 'react';

interface IProps {
    onClose: () => void
}

const RegistrationForm = ({ onClose }: IProps) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted :", formData);
        
        onClose()
    }

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
        <Input
            isRequired
            label="Email"
            name="email"
            placeholder="Введите ваш email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            validate={(value) => {
                if(!value) return "Введите email"
                if(!validateEmail(value)) return "Неверный email"
                return null
            }}
        />

        <Input
            isRequired
            label="Password"
            name="password"
            placeholder="Введите пароль"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            validate={(value) => {
                if(!value) return "Пароль обязателен"
                if(value.length < 6) return "Пароль должен быть не менее 6 символом"
                return null
            }}
        />

        <Input
            isRequired
            label="ConfirmPassword"
            name="confirmPassword"
            placeholder="Подтвердите пароль"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            validate={(value) => {
                if(!value) return "Пароль для подтверждения обязателен"
                if(value !== formData.password) return "Пароли не совпадают"
                return null
            }}
        />

        <div className='flex gap-4 items-center pt-8 justify-end'>
            <Button onPress={onClose} variant="light">
                Отмена
            </Button>
            <Button type="submit" color="primary">
                Зарегестрироваться
            </Button>
        </div>
    </Form>
  );
};

export default RegistrationForm
