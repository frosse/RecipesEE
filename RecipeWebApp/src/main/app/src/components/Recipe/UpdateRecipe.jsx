import React, { useState } from "react";
import axios from "axios";

const UpdateRecipe = () => {
	const { id } = useParams();
	const [org.frosse.recipe, setRecipe] = useState({});

	const fetchRecipe = () => {
		axios.get("http://localhost:8080/api/v1/org.frosse.recipe/" + id).then(res => {
			console.log(res.data);
			setRecipe(res.data);
		});
	};
	useEffect(() => {
		fetchRecipe();
	}, []);

	const components = () => {
		return org.frosse.recipe.components.map(component => {
			console.log(component.amount);
			return (
				<li>
					{component.amount}
					{component.unitOfMeasure.abbreviation} {component.ingredient.name}
				</li>
			);
		});
	};
	const instructions = () => {
		return org.frosse.recipe.instructions.map(instruction => {
			return <li>{instruction.text}</li>;
		});
	};
	return (
		<Container>
			<h1>{org.frosse.recipe.name}</h1>
			<h4>{org.frosse.recipe.category && org.frosse.recipe.category.name}</h4>
			<h4>{org.frosse.recipe.description}</h4>
			<ul>{org.frosse.recipe.components && components()}</ul>
			<ol>{org.frosse.recipe.instructions && instructions()}</ol>
		</Container>
	);

}

export default UpdateRecipe;
