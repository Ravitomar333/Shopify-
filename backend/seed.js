const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const bcrypt = require('bcryptjs');
const Product = require('./model/Product');
const User = require('./model/User');
const Order = require('./model/Order');

const users = [
	{ name: 'Admin', email: 'admin@gmail.com', password: 'password123', role: 'admin', verified: true },
	{ name: 'Ravi', email: 'ravi@gmail.com', password: 'password123', role: 'user', verified: true }
];

const products = [
	{ name: 'T-Shirt', description: 'Comfortable cotton t-shirt', price: 19.99, category: 'Apparel', stock: 50, imageUrl: 'https://via.placeholder.com/400x400?text=T-Shirt' },
	{ name: 'Sneakers', description: 'Running sneakers', price: 79.99, category: 'Footwear', stock: 30, imageUrl: 'https://via.placeholder.com/400x400?text=Sneakers' },
	{ name: 'Coffee Mug', description: 'Ceramic mug 350ml', price: 9.99, category: 'Home', stock: 100, imageUrl: 'https://via.placeholder.com/400x400?text=Coffee+Mug' },
	{ name: 'Wireless Headphones', description: 'Noise-cancelling headphones', price: 129.99, category: 'Electronics', stock: 20, imageUrl: 'https://via.placeholder.com/400x400?text=Headphones' },
	{ name: 'Notebook', description: 'Lined A5 notebook', price: 5.5, category: 'Stationery', stock: 200, imageUrl: 'https://via.placeholder.com/400x400?text=Notebook' }
];

async function seed() {
	try {
		await connectDB();

		// Clear existing data
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		// Insert users with hashed passwords
		const userDocs = [];
		for (const u of users) {
			const hashed = await bcrypt.hash(u.password, 10);
			userDocs.push({ ...u, password: hashed });
		}
		const createdUsers = await User.insertMany(userDocs);

		// Insert products
		const createdProducts = await Product.insertMany(products);

		// Create a sample order for the second user
		const sampleOrder = new Order({
			user: createdUsers[1]._id,
			products: [
				{ product: createdProducts[0]._id, qty: 2, price: createdProducts[0].price },
				{ product: createdProducts[2]._id, qty: 1, price: createdProducts[2].price }
			],
			totalAmount: (createdProducts[0].price * 2) + createdProducts[2].price,
			address: {
				fullName: 'Ravi Tomar',
				street: 'Bishaich',
				city: 'Bulandshahr',
				postalCode: '203408',
				country: 'India'
			},
			paymentId: null,
			status: 'pending'
		});
		await sampleOrder.save();

		console.log('Seeding completed: users, products, and an order inserted.');
		process.exit(0);
	} catch (error) {
		console.error('Seeding error:', error);
		process.exit(1);
	}
}

seed();
