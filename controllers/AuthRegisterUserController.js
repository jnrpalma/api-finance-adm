const User = require("../models/User");
const UploadImage = require("../models/UploadImage");

const bcrypt = require("bcrypt");

module.exports = class AuthRegisterUserController {
  static async init(req, res) {
    res.send({ message: "Bem vindo a nossa API!" });
  }

  static async registerUser(req, res) {
    const { name, email, age, password, confirmPassword } = req.body;

    let image = "";

    if (req.file) {
      image = req.file.filename;
    }

    if (!name) {
      return res.status(422).json({ message: "O nome é obrigatório!" });
    }

    if (!email) {
      return res.status(422).json({ message: "O email é obrigatório!" });
    }

    if (!age) {
      return res.status(422).json({ message: "A idade é obrigatório!" });
    }

    if (!password) {
      return res.status(422).json({ message: "A senha é obrigatório!" });
    }

    if (password != confirmPassword) {
      return res.status(422).json({ message: "A senhas não são iguais!" });
    }

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res
        .status(422)
        .json({ message: "Já existe uma conta com esse e-mail!" });
    }

    const hash = await bcrypt.genSalt(12);

    const passwordHash = await bcrypt.hash(password, hash);

    const user = new User({
      name,
      email,
      age,
      image,
      password: passwordHash,
    });

    try {
      await user.save();
      res
        .status(201)
        .json({ message: "Usuário cadastrado com sucesso!", user });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Ocorreu um erro ao cadastrar o usuário, tente mais tarde!",
        });
    }
  }
  static async uploadImage(req, res) {
    let image = "";

    if (req.file) {
      image = req.file.filename;
    }

    const uploadImage = new UploadImage({
      image
    });

    try {
      await uploadImage.save();
      res
        .status(201)
        .json({ message: "Upload realizado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Ocorreu um erro ao fazer upload da imagem, tente mais tarde!",
        });
    }
  }
};
