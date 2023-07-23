import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, "Title field is required"],
		},
		description: {
			type: String,
			required: false,
		},
		price: {
			type: Number,
			required: [true, "Price field is required"],
		},
		image: {
			type: String,
			required: false,
		},
		category: {
			type: Array,
			required: false,
		},
		volume: {
			type: Number,
			required: false,
		},
		unit: {
			type: String,
			required: false,
		},
		company: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);
const Product = model("Product", ProductSchema);
export default Product;
