const router = require("express").Router();

const DebtsController = require("../controllers/DebtsController");

router.post("/auth/debts", DebtsController.registerDebts);
router.get("/list/debts", DebtsController.listDebts);
router.put("/update/debts/:id", DebtsController.updateDebts);
router.delete("/delete/debt/:id", DebtsController.deleteDebts);

module.exports = router;
