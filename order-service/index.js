const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const communicator = require('./communicator/index'); // Use relative path




const orders = [
    { id: 1, user_id: 1, product_id: 1 },  // Matches user {id: 1, name: 'Nikhil'}
  ];

app.get('/api/orders', async (req, res) => {
  try {
    const users = await communicator.getUsers();
    const products = await communicator.getProducts();
    console.log(users)
    console.log(products)

    const detailedOrders = orders.map(order => {
        const user = users.users.find(user => user.id === order.user_id) || { error: "User not found" };
        const product = products.products.find(product => product.id === order.product_id) || { error: "Product not found" };
      
        return { ...order, user, product };
      });

    res.json({ orders: detailedOrders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});
