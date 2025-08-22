import { sql } from "../database/db.js";

const createProducts = async(req,res)=>{
    const {name,price,image}=req.body;
    try{
        if(!name || !price || !image){
            return res.status(400).json({
                success:false,
                message:"All feilds are mandatory"
            })
        }
        const product = await sql`INSERT INTO products (name,image,price) VALUES(${name},${image},${price}) RETURNING *`
        // console.log(product);
            if(!product){
            return res.status(400).json({
                success:false,
                message:"Product cannot be fetched"
                })
            }
        return res.status(200).json({
            success:true,
            message:"Product Created Successfully",
            data:product[0]
        })

    }
    catch(error){
        console.log("Product cannot be created",error);
        return res.status(500).json({
            scuess:false,
            message:"Product cannot be created"
        })
    }
}

const getAllProducts = async(req,res)=>{
    try{
        const products=await sql`SELECT * FROM products ORDER BY id `
        if(!products){
            return res.status(400).json({
                success:false,
                message:"Product cannot be fetched"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Products Fetched Successfully",
            data:products
        })
    }

    catch(error){
        console.log("Products cannot be fetched :",error);
        return res.status(500).json({
            sucess:false,
            message:"Products cannot be fetched"
        })
    }
}

const getProduct = async(req,res)=>{
    const {id}=req.params;
    try{
        if(!id){
            return res.status(400).json({
                success:false,
                message:"No id passed in URL"
            })
        }
        const product = await sql`SELECT * FROM PRODUCTS WHERE id=${id}`
        if(!product){
            return res.status(400).json({
                success:false,
                message:"Product cannot be fetched"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Product Fecthed Successfully",
            data:product
        })
    }
    catch(error){
        console.log("Product cannot be fetched :",error);
        return res.status(500).json({
            success:false,
            message:"Product cannot be fetched"
        })
    }
}


export {getAllProducts,createProducts,getProduct}