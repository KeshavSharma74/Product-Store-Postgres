import { sql } from "../database/db.js";

const createProducts = async (req, res) => {
    const { name, price, image } = req.body;
    try {
        if (!name || !price || !image) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory"
            });
        }
        const product = await sql`INSERT INTO products (name, image, price) VALUES (${name}, ${image}, ${price}) RETURNING *`;
        if (!product.length) {
            return res.status(400).json({
                success: false,
                message: "Product cannot be created"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product Created Successfully",
            data: product[0]
        });
    } catch (error) {
        console.log("Product cannot be created", error);
        return res.status(500).json({
            success: false,
            message: "Product cannot be created"
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await sql`SELECT * FROM products ORDER BY id`;
        if (!products.length) {
            return res.status(400).json({
                success: false,
                message: "Products cannot be fetched"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Products Fetched Successfully",
            data: products
        });
    } catch (error) {
        console.log("Products cannot be fetched:", error);
        return res.status(500).json({
            success: false,
            message: "Products cannot be fetched"
        });
    }
};

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "No id passed in URL"
            });
        }
        const product = await sql`SELECT * FROM products WHERE id = ${id}`;
        if (!product.length) {
            return res.status(400).json({
                success: false,
                message: "Product cannot be fetched"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product Fetched Successfully",
            data: product[0]
        });
    } catch (error) {
        console.log("Product cannot be fetched:", error);
        return res.status(500).json({
            success: false,
            message: "Product cannot be fetched"
        });
    }
};

const updateProduct = async (req, res) => {
    const { name, image, price } = req.body;
    const { id } = req.params;
    try {
        if (!name || !image || !price) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory"
            });
        }
        const product = await sql`UPDATE products SET name = ${name}, image = ${image}, price = ${price} WHERE id = ${id} RETURNING *`;
        if (!product.length) {
            return res.status(400).json({
                success: false,
                message: "Product cannot be updated"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            data: product[0]
        });
    } catch (error) {
        console.log("Product cannot be updated:", error);
        return res.status(500).json({
            success: false,
            message: "Product cannot be updated"
        });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Id of product is not provided"
            });
        }
        const product = await sql`DELETE FROM products WHERE id = ${id} RETURNING *`;
        if (!product.length) {
            return res.status(400).json({
                success: false,
                message: "Product cannot be deleted"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
            data: product[0]
        });
    } catch (error) {
        console.log("Product cannot be deleted:", error);
        return res.status(500).json({
            success: false,
            message: "Product cannot be deleted"
        });
    }
};

export { getAllProducts, createProducts, getProduct, updateProduct, deleteProduct };
