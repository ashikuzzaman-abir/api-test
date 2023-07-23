// import { sortBy } from "lodash";

const pagination = (req, res, next) => {
	const { sortBy, size, page } = req.query;
	req.meta = {
		sortBy,
		size,
		page,
	};
	next();
};

export default pagination;
