import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
	res.status(200).send("<h1>Hello world</h1>");
});
router.get("/error", async (req, res) => {
	res.status(400).send("something went wrong");
});

router.post("/test", async (req, res) => {
	res.status(200).json(req.body);
});

export default router;
