const express = require("express");
const router = express.Router();

router.post("/sign-up", (req, res) => {
  console.log(req.body); //req.body로 요청이 감.
  res.status(200).json({
    message: true,
    data: "넌 나의 노예!",
  });
});

module.exports = router;

// insert into tb_user (email) value (${req.body.userId})이런식으로 들어감
