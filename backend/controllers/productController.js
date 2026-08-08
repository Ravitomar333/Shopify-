const Product = require("../model/Product");
const cloudinary = require("../config/cloudinary");

const getProducts = async (req,res) =>{
    try{
        const products = await Product.find();
        res.json(products);
    }catch (error){
        res.status(500).json({message: 'Server Error'});
    }
};

const getProductById = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }else{
            res.status(404).json({message: 'Product Not Found'});

        }
    }catch (error){
        res.status(500).json({message: 'Server Error'});
    }
};
// Create Product

const createProduct = async (req,res)=>{
    try{
        const { name, description, price, category, stock} = req.body;
        let imageUrl = '';

        if(req.file){
            const result = await cloudinary.uploader.upload(req.file.path);
            
            imageUrl = result.secure_url;
        }

        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    }
    catch(error){
        console.error('Create product error:', error);
        res.status(500).json({ message: error.message || 'Server error' });
    }
};


// update product

const updateProduct = async (req,res)=>{
    try{
        const{name,description,price,category,stock} = req.body;
        const product = await Product.findById(req.params.id);
        if(product){
            product.name = name ?? product.name;
            product.description = description ?? product.description;
            product.price = price ?? product.price;
            product.category = category ?? product.category;
            product.stock = stock ?? product.stock;

            if(req.file){
                const result = await cloudinary.uploader.upload(req.file.path);
                console.log(result);
                product.imageUrl = result.secure_url;
            }
            const updateProduct = await product.save();
            res.json(updateProduct);
        }
        else{
            res.status(404).json({message: 'Product not Found'});
        }
    }
    catch(error){
        res.status(500).json({message: 'Server error'});
    }
};


// Delete Product

const deleteProduct = async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);

        if(product){
            await Product.deleteOne({ _id: product._id });
            res.json({message: 'Product removed'});
        }
        else{
            res.status(404).json({message: 'Product not Found'});
        }
}
    catch(error){
        console.error('Delete product error:', error);
        res.status(500).json({message : error.message || 'Server Error'});
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}