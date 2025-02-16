import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
    return (
        <div className="card shadow-sm" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={recipe.image || "https://via.placeholder.com/150"}
                alt={recipe.name}
                style={{ height: "200px" }}
            />
            <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <hr/>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-danger btn-sm  w-100">
                    View Recipe
                </Link>
            </div>
        </div>
    );
};

export default Card;
