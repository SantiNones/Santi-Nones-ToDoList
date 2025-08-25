import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ToDoList from "./ToDoList";
import "./index.css";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="todo-title"> todos </h1>
			<ToDoList/>
		</div>
	);
};

export default Home;