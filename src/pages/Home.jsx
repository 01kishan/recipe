import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes?sortBy=name&order=asc")
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data.recipes);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container mx-auto px-6 py-12 mt-4">
            <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-6">🍽️ Explore Tasty Recipes</h2>
            <p className="text-center text-lg text-gray-600 mb-10">
                Discover and enjoy delicious recipes from around the world.
            </p>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="row justify-content-center">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="col-md-4 mt-4 d-flex justify-content-center">
                            <Card recipe={recipe} />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Home;
