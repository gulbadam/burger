const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);

    });
})
router.post("/", (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, "0"], (data) => {

        res.redirect("/");
    });
});
router.put("/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({ devoured: req.body.devoured }, condition, (data) => {
        res.redirect("/");
    })

});
router.delete("/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    burger.delete(condition, (data) => {
        res.redirect("/");

    });

});
module.exports = router;