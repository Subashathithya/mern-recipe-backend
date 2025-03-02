const authMiddleware = require("../middleware/authmiddleware");

router.post("/", authMiddleware, async (req, res) => {
  const { name, description, image, steps } = req.body;
  try {
    const newRecipe = new Recipe({ name, description, image, steps });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
