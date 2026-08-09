const Order = require('../model/Order');

const sendEmail = require('../utils/sendEmail');

// Create new Order 

const createOrder = async (req,res) =>{
    try{
        const { items, products, totalAmount, address, paymentId, paymentMethod = 'razorpay' } = req.body;
        const normalizedItems = Array.isArray(items)
            ? items
            : Array.isArray(products)
                ? products
                : [];

        if(normalizedItems.length === 0 || !totalAmount || !address){
            return res.status(400).json({message: 'Invalid Order Data'});
        }

        const orderItems = normalizedItems.map((item) => ({
            product: item.productId || item.product,
            qty: item.quantity || item.qty || 1,
            price: String(item.price || 0),
        }));

        if(orderItems.some((item) => !item.product)){
            return res.status(400).json({message: 'Invalid Order Data'});
        }

        if (!['razorpay', 'cod'].includes(paymentMethod)) {
            return res.status(400).json({message: 'Invalid payment method'});
        }

        const order = new Order({
            user: req.user._id,
            products: orderItems,
            totalAmount,
            address,
            paymentId,
            paymentMethod,
        });
        await order.save();
        const message = `Dear ${req.user.name},\n\n
            Thank You for your order! , Your Order has been created successfully created with details : \n\n OrderID: ${order._id}\n Total Amount: $${totalAmount} \n Shipping Address : ${address}\n\n we will notify you when order is shipped.\n\n Best regards,\n Shopify Team. `;
        res.status(201).json({message: 'Order created successfully', order});
        sendEmail(req.user.email,'Order Created', message)
            .catch((error) => console.error('Order email failed:', error));
     }
     catch (error){
        res.status(500).json({message : 'Error creating order', error});
     }

    };

    // my Orders

    const myOrders = async (req,res) =>{
        try{
            const orders = await Order.find({ user: req.user._id })
                .populate({ path: 'products.product', select: 'name price' })
                .sort({ createdAt: -1 });

            res.json(orders);
        } catch (error){
            res.status(500).json({message : 'Error Fetching orders' , error});
        }
};

// get all orders - for admin 
 const getOrders = async (req,res) =>{
    try{
        const orders = await Order.find({})
            .populate({ path: 'user', select: 'name email' })
            .populate({ path: 'products.product', select: 'name price' });
        res.json(orders);
    } catch (error){
        res.status(500).json({message : 'Error fetching all orders', error});
    }
 };

 // update order status

 const updateOrderStatus = async (req,res)=>{
    try{
        const {status} = req.body;
        const order = await Order.findById(req.params.id);
        if(order){
            order.status = status;
        await order.save();
        res.json({message: 'Order status Updates', order});    
      } else{
        res.status(404).json({message : ' Order not found'});
      }

    }catch (error){
        res.status(500).json({message : 'Error updating order status' ,error});
    }
 };

module.exports = {
    createOrder,
    myOrders,
    getOrders,
    updateOrderStatus,
};
