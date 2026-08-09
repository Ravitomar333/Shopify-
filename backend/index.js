const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();


const cors = require("cors");

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://shopify-alpha-eosin.vercel.app",
        "https://shopify-alpha-eosin.vercel.app/"
    ],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const connectDB = require("./config/db");
connectDB();

const userRoutes = require("./routes/authRoutes")
const products = require("./routes/productRoutes");
const orders = require("./routes/orderRoutes");
const payment = require("./routes/paymentRoutes");
const analytics = require("./routes/analyticsRoutes");


app.use("/api/auth",userRoutes);
app.use("/api/products",products);
app.use("/api/orders",orders);
app.use("/api/payment",payment);
app.use("/api/analytics",analytics);












app.get("/",(req,res) => {
    res.send("Backend Working Successfully");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT} 🚀` );
});
