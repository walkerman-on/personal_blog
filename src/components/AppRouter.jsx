import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../router/routes"
import NotFound from "../pages/NotFound"
import Login from "../pages/Login"
import Posts from "../pages/Posts"
import Loader from "../components/UI/loader/Loader"
import { AuthContext } from "../context/context"

const AppRouter = () => {
	const { isAuth, setIsAuth, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return <Loader />
	}

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route path={route.path} element={route.element} key={route.path} />
			))}
			<Route path="/" element={<Posts />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route path={route.path} element={route.element} key={route.path} />
			))}
			<Route path="/" element={<Login />} />
		</Routes>
	)
}

export default AppRouter
