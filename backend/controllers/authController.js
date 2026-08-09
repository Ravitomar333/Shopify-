const User = require("../model/User");
const jwt = require('jsonwebtoken');

const bcrypt = require("bcryptjs");


const generateToken = (id)=>{
       return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

};

// Register a new User

const registerUser = async(req, res) => {
    const {name,email,password } = req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const user = await User.create({name,email,password: hashedPassword,});
        if(user){
            res.status(201).json({
                _id: user.id,
                name:user.name,
                email:user.email,
                role:user.role,
                token:generateToken(user._id)
            });
       }else{
        res.status(400).json({message: 'Invalid User Data'});
       }
        
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "User already registered" });
        }
        res.status(500).json({
            message: error.message
        });
    }
}

//Login User

const loginUser = async (req, res) =>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(user && (await bcrypt.compare(password , user.password))){
            res.json({
                _id: user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                token:generateToken(user._id)
            });
        }else{
            res.status(400).json({message: 'Invalid email or password'});
        }
    }
    catch (error) {
        res.status(500).json({message : 'Server error'});
    }
}

const getUser = async (req,res) =>{
    try{
        const users = await User.find({}).select("-password");
        res.json(users);
   } catch (error){
    res.status(500).json({message : 'Server Error'});
   }
};

module.exports = {registerUser,loginUser, getUser};
