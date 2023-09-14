import React, { useContext } from "react"
import { AuthContext } from "../context/context"
import MyButton from "../components/UI/button/MyButton"
import MyInput from "../components/UI/input/MyInput"

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const login = (event) => {
		event.preventDefault()
		setIsAuth(true)
		localStorage.getItem("auth", "true")
	}

	return (
		<div className="login_menu">
			<div className="login_menu-top">
				<div className="circle">АГ</div>
				<p>
					Войти в <span className="primaryText"> Личный блог</span>
				</p>
			</div>
			<form className="login_form" onSubmit={login}>
				<MyInput type="text" placeholder="Введите логин" />
				<MyInput type="password" placeholder="Введите пароль" />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	)
}

export default Login
