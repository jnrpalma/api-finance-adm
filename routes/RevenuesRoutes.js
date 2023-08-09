const router = require("express").Router();

const RevenuesController = require("../controllers/RevenuesController");

router.post("/auth/revenues", RevenuesController.registerRevenues);
router.get("/list/revenues", RevenuesController.listRevenues);
router.put("/update/revenues/:id", RevenuesController.updateRevenues);
router.delete("/delete/revenue/:id", RevenuesController.deleteReveune);

module.exports = router;
