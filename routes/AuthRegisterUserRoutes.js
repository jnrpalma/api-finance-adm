const router = require("express").Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|JPEG|PNG)$/)) {
      return cb(Error("É permitido somente o envio de jpg ou png!"));
    }
    cb(null, true);
  },
});

const AuthRegisterUserController = require("../controllers/AuthRegisterUserController");

router.get("/", AuthRegisterUserController.init);
router.post("/auth/register/user", upload.single("image"), AuthRegisterUserController.registerUser);
router.post("/upload/image", upload.single("image"), AuthRegisterUserController.uploadImage)

module.exports = router;
