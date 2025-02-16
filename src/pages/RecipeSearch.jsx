import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const RecipeSearch = () => {
    const [searchQuery, setSearchQuery] = useState("chicken");
    const [searchByTag, setSearchByTag] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searcingByTag, setSearcingByTag] = useState(false);

    // Fetch available tags from API
    useEffect(() => {
        fetch("https://dummyjson.com/recipes/tags")
            .then((res) => res.json())
            .then((data) => setTags(data))
            .catch((error) => console.error("Error fetching tags:", error));
    }, []);

    // Function to fetch recipes based on search query
    const fetchRecipes = async (query , source=null) => {
        if (!query.trim()) return;
        setLoading(true);

        try {
            if(source == 'tags')
                var apiUrl = `https://dummyjson.com/recipes/tag/${query}`;
            else
                var apiUrl = `https://dummyjson.com/recipes/search?q=${query}`;
            const res = await fetch(apiUrl);
            const data = await res.json();
            setRecipes(data.recipes || []);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        } finally {
            setLoading(false);
        }
    };

    // Debounce Effect: Waits for 500ms before making API call
    useEffect(() => {
        setSearcingByTag(false);
        const delaySearch = setTimeout(() => {
            fetchRecipes(searchQuery);
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [searchQuery]);
    // Debounce Effect: Waits for 500ms before making API call
    useEffect(() => {
        const delaySearch = setTimeout(() => {
            fetchRecipes(searchByTag,"tags");
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [searchByTag]);

    // Handle tag click
    const handleTagClick = (tag) => {
        setSearchByTag(tag);
        setSearcingByTag(true);
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="container mx-auto px-6 py-12 mt-4">
            <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4">🔎 Search for Recipes</h2>
            <p className="text-center text-gray-600 mb-6">
                Click a tag or type a recipe name to find delicious meals!
            </p>

            {/* Search Input */}
            <div className="flex justify-center mb-4 mt-4">
                <input
                    type="text"
                    placeholder="Search for a recipe..."
                    className="form-control"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Loading Indicator */}
            {loading && <p className="text-center text-gray-600 mt-6">Loading...</p>}

            {/* Display Recipes */}
            <div className="row">
                {!loading && recipes.length > 0 && (
                    <>
                        <h4 className="mt-4">Results {searcingByTag && <small>(By tag '{searchByTag}')</small>}</h4>
                        <hr />
                        {recipes.map((recipe) => (
                            <div key={recipe.id} className="col-md-4 mt-4">
                                <Card recipe={recipe} />
                            </div>
                        ))}
                    </>
                )}

                {/* No Results Found */}
                {!loading && recipes.length === 0 && searchQuery && (
                    <p className="text-center text-gray-600 mt-6">
                        No recipes found for "{searchQuery}". Try another search!
                    </p>
                )}
            </div>

             {/* Tags Section */}
             <div className="mb-4 mt-4">
                <h4>Search By Tags</h4>
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        className="btn btn-outline-info btn-sm m-1"
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default RecipeSearch;
