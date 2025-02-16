import React from "react";
import cooking from "../assets/images/5533102.jpg"

const About = () => {
  return (
    <section className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-danger">🍽️ About Our Recipe App</h1>
        <p className="text-muted">
          Discover mouthwatering recipes and cook with confidence! 👨‍🍳✨
        </p>
      </div>

      <div className="row align-items-center">
        {/* Left Side - Cooking GIF */}
        <div className="col-md-6 text-center">
          <img
            src={ cooking }
            alt="Cooking"
            className="img-fluid rounded shadow-lg"
          />
        </div>

        {/* Right Side - About Content */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-4">Our Mission 🚀</h2>
          <p className="lead">
            We bring you a curated selection of the best recipes, making cooking fun, simple, and exciting. Whether you're a beginner or a pro, you'll find something delicious to try! 🍕🍲🍰
          </p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">✅ Easy-to-follow recipes</li>
            <li className="list-group-item">✅ Step-by-step cooking guides</li>
            <li className="list-group-item">✅ Fresh ingredients & healthy choices</li>
          </ul>
          <a href="/" className="btn btn-primary btn-lg">
            Explore Recipes 🍲
          </a>
        </div>
      </div>
      <hr className="mt-5"/>
      {/* Section - Meet the Team */}
      <div className="mt-5 text-center">
        <h2 className="fw-bold mb-4">Meet Our Team 👩‍🍳👨‍🍳</h2>
        <div className="row">
            <div className="col-md-3">
                <img
                    src="https://img.freepik.com/free-vector/female-chef-concept-illustration_114360-11121.jpg?t=st=1739635568~exp=1739639168~hmac=da56a508635afbcc1852de57613cef4dbef4efe9cd52a50147be9bb75f0d39a6&w=740"
                alt="Chef Team"
                style = {{ width: "200px" }}
                className="img-fluid rounded shadow-lg"
                />
            </div>
            <div className="col-md-3">
                <img
                    src="https://img.freepik.com/free-vector/female-chef-concept-illustration_114360-12051.jpg?t=st=1739635638~exp=1739639238~hmac=d19aaed9e88a2d3a7939acc1648de096ececb57b5f98584e37406e98d688117d&w=740"
                alt="Chef Team"
                style = {{ width: "200px" }}
                className="img-fluid rounded shadow-lg"
                />
            </div>
            <div className="col-md-3">
                <img
                    src="https://img.freepik.com/free-vector/female-chef-concept-illustration_114360-11391.jpg?t=st=1739635666~exp=1739639266~hmac=29f6eee598b4cc026a1aa8d937b26054d717bc28c4423a8a5b843f31299a2019&w=740"
                alt="Chef Team"
                style = {{ width: "200px" }}
                className="img-fluid rounded shadow-lg"
                />
            </div>
            <div className="col-md-3">
                <img
                    src="https://img.freepik.com/free-vector/female-chef-concept-illustration_114360-15290.jpg?t=st=1739635457~exp=1739639057~hmac=c88fae4638a17a7428adc91e1f9b2a68c341b14a4aecc108edfc9487e7e6679e&w=740"
                alt="Chef Team"
                style = {{ width: "200px" }}
                className="img-fluid rounded shadow-lg"
                />
            </div>
        </div>
        
        <p className="text-muted mt-3">
          A passionate team of food lovers, chefs, and developers bringing you the best recipes. ❤️
        </p>
      </div>
      <hr className="mt-5"/>
      {/* Fun Cooking Animation */}
      <div className="mt-5 text-center">
        <h2 className="fw-bold mb-4">Cooking is an Art! 🎨🍳</h2>
        <img
          src="https://img.freepik.com/free-photo/anime-style-chef-character-with-fire_23-2151152230.jpg?t=st=1739635872~exp=1739639472~hmac=e516b158f8d416b9b6056ba66e72f552f648becd01ba98f32efdfe3c20872093&w=740"
          alt="Cooking Fun"
          style = {{ width: "450px" }}
          className="img-fluid rounded shadow-lg"
        />
        <p className="text-muted mt-3">
          Cooking is not just about food; it’s about creating memories. Let's get started on this flavorful journey! 🎉
        </p>
      </div>
    </section>
  );
};

export default About;
