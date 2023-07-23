import ProductModel from "../../models/products.model.js";

export const addProduct = async (req, res) => {
	try {
		const model = new ProductModel(req.body);
		const result = await model.save();

		return res.status(201).json({
			data: result,
			message: "product created",
		});
	} catch (err) {
		if (err) {
			return res.status(500).json({
				message: err.message,
			});
		}
	}
};

export const getProducts = async (req, res) => {
	try {
		const result = await ProductModel.find();
		return res.status(200).json({
			data: result,
		});
	} catch (err) {
		if (err) {
			return res.status(500).json({
				message: err.message,
			});
		}
	}
};
export const getAProduct = async (req, res) => {
	try {
		const result = await ProductModel.findById(req.params.id);
		if (!result) {
			return res.status(400).json({
				message: "Product Not Found",
			});
		}
		return res.status(200).json({
			data: result,
		});
	} catch (err) {
		if (err) {
			return res.status(500).json({
				message: err.message,
			});
		}
	}
};

export const updateAProduct = async (req, res) => {
	try {
		const result = await ProductModel.findById(req.params.id);
		if (!result) {
			return res.status(400).json({
				message: "Product not found",
			});
		}
		req.body.title && (result.title = req.body.title);
		req.body.description && (result.description = req.body.description);
		req.body.price && (result.price = req.body.price);
		req.body.image && (result.image = req.body.image);
		req.body.unit && (result.unit = req.body.unit);
		req.body.volume && (result.volume = req.body.volume);
		req.body.category && (result.category = req.body.category);
		req.body.company && (result.company = req.body.company);

		// result = { ...result, ...req.body };
		const updated = await result.save();

		if (!updated) {
			return res.status(400).json({
				message: "Product not updated",
			});
		}

		return res.status(202).json({
			data: updated,
		});
	} catch (err) {
		if (err) {
			return res.status(500).json({
				message: err.message,
			});
		}
	}
};
