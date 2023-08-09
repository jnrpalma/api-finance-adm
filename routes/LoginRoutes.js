const router = require("express").Router();

const jwt = require("jsonwebtoken");

const LoginController = require("../controllers/LoginController");

function validateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acesso negado! Verifique se o token foi passado!" });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(500).json({ message: "Token inválido!" });
  }
}

router.post("/auth/login", LoginController.login);
router.get("/download/image", LoginController.downloadImage);

router.get("/user/:id", validateToken, LoginController.getUserById);
module.exports = router;

