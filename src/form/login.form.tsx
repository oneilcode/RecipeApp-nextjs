import { Form } from '@heroui/form';
import { Button, Input } from '@heroui/react';
import React, { useState } from 'react';

interface IProps {
    onClose: () => void
}

const loginForm = ({ onClose }: IProps) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

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
                return null
            }}
        />

        <div className='flex gap-4 items-center pt-8 justify-end'>
            <Button onPress={onClose} variant="light">
                Отмена
            </Button>
            <Button type="submit" color="primary">
                Войти
            </Button>
        </div>
    </Form>
  );
};

export default loginForm
