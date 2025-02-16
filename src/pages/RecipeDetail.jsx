import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/recipeDetail.css";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setRecipe(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipe details:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return (
        <div className="text-center mt-5">
            <p>Loading Recipe...</p>
        </div>
    );

    if (!recipe) return (
        <div className="text-center mt-5">
            <h2 className="text-danger">Recipe Not Found 😢</h2>
            <a href="/" className="btn btn-outline-primary mt-3">Go Back</a>
        </div>
    );

    return (
        <div className="container mt-5 recipe-container">
            <div className="recipe-header text-center">
                <h1 className="text-primary fw-bold">{recipe.name}</h1>
                <p className="text-muted fst-italic">{recipe.description}</p>
            </div>

            {/* Recipe Image */}
            <div className="text-center">
                <img src={recipe.image} alt={recipe.name} className="rounded recipe-img shadow recipeDetailImg" />
            </div>

            {/* Recipe Details */}
            <div className="recipe-content mt-4 p-4">
                <div className="row">
                    {/* Ingredients List */}
                    <div className="col-md-6">
                        <h3 className="text-success">🥕 Ingredients</h3>
                        <ul className="list-group">
                            {recipe.ingredients?.map((ingredient, index) => (
                                <li key={index} className="list-group-item">{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div className="col-md-6">
                        <h3 className="text-danger">👨‍🍳 Instructions</h3>
                        <p className="instructions-box">{recipe.instructions}</p>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-4">
                <a href="/" className="btn btn-primary btn-lg">⬅ Back to Recipes</a>
            </div>
        </div>
    );
};

export default RecipeDetail;
