const Stores = require('../model/Stores');
const Products = require('../model/Products');
const Orders = require('../model/Orders');

//Show Index Route
const showIndex = (req, res) => {
  res.send('index');
};

//Show all stores from DB
const showAllStores = async (req, res) => {
  try {
    const storesArr = await Stores.find({});
    res.status(200).json({
      data: storesArr
    });
  } catch(err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

//Get all Products by Store Id

const getProductsByStoreId = async (req, res) => {
  const { storeId } = req.params;
  try {
    const productsArr = await Products.find({ shopId: storeId });
    res.status(200).json({
      data: productsArr
    });
  } catch(err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
}

//Show all orders from DB
const getAllOrders = async (req, res) => {
  try {
    const ordersArr = await Orders.find({});
    res.status(200).json({
      data: ordersArr
    });
  } catch(err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
}

//Sent Order to Database
const submitOrder = async (req, res) => {
  try {
    const newOrder = new Orders(req.body);
    const order = await newOrder.save();
    res.status(200).json({
      data: order
    })
  } catch(err) {
    console.log('Error>>>', err.message);
    res.status(500).json({
      message: 'Server Error'
    });
  }
}


module.exports = {
  showIndex,
  showAllStores,
  getProductsByStoreId,
  submitOrder,
  getAllOrders
};
