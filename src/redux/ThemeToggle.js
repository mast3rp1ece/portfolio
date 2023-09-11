import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeReducer";
import { Toggle, Label } from "../components/styled/ThemeToggleStyled";

const ThemeToggle = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.theme.darkMode);

	const handleToggleTheme = () => {
		dispatch(toggleTheme());
	};

	return (
		<>
			<Toggle type="checkbox" id="toggle" checked={darkMode} onChange={handleToggleTheme}/>
			<Label htmlFor="toggle"></Label>
		</>
	)
}

export default ThemeToggle;