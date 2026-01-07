const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let recipes = [
  { id: 1, name: "Pasta", ingredients: "Tomato, Cheese", steps: "Boil and mix" },
  { id: 2, name: "Sandwich", ingredients: "Bread, Veggies", steps: "Assemble and serve" }
];

app.get("/api/recipes", (req, res) => res.json(recipes));

app.post("/api/recipes", (req, res) => {
  const recipe = { id: recipes.length + 1, ...req.body };
  recipes.push(recipe);
  res.status(201).json(recipe);
});

app.listen(PORT, () => console.log("Server running on port 3000"));
