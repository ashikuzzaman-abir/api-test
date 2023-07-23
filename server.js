import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./datatbase/connectDB.js";

//routes import
import rootRoute from "./routes/index.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(
	morgan("dev", {
		skip: (req, res) => {
			return res.statusCode < 400;
		},
	})
);


connectDB();

//routes

app.use("/api", rootRoute);

app.listen(PORT, () => {
	
	console.log("Server is running @ ", PORT);
});
