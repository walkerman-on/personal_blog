import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
    return (
        <div>
            <MyInput type = "text" placeholder = "Введите логин"/>
            <MyInput type = "password" placeholder = "Введите пароль"/>
            <MyButton>Войти</MyButton>
        </div>
    );
};

export default Login; 