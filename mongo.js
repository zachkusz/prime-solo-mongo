//1 create orders collection
db.createCollection('orders')

//2 Insert at least 3 documents that represent an order.
db.getCollection('orders').insert([{
  orderDate: new Date('2016-04-21'),
  orderTotal: 130.00,
  lineItems: [{'productName': 'Death Star', 'unitPrice': 60.00, 'quantity': 1},
    {'productName': 'X-wing', 'unitPrice': 40.00, 'quantity': 1},
    {'productName': 'Snow Speeder', 'unitPrice': 30.00, 'quantity': 1}]
},
{
  orderDate: new Date('2014-10-01'),
  orderTotal: 160.00,
  lineItems: [{'productName': 'Porsche', 'unitPrice': 30.00, 'quantity': 1},
    {'productName': 'Fire Station', 'unitPrice': 90.00, 'quantity': 1},
    {'productName': 'Crane', 'unitPrice': 40.00, 'quantity': 1}]
},
{
  orderDate: new Date('2016-11-12'),
  orderTotal: 110.00,
  lineItems: [{'productName': 'Elven Council', 'unitPrice': 40.00, 'quantity': 1},
    {'productName': 'Orc Pack', 'unitPrice': 10.00, 'quantity': 3},
    {'productName': 'Eagles', 'unitPrice': 40.00, 'quantity': 1}]
}])

//3 Find a single order document, any order document.
db.orders.findOne()

//4 Find all orders and make them look pretty.
db.orders.find({}).pretty()

//5 Find all orders with an orderDate that is prior to 1/1/2016.
db.orders.find({
    orderDate: {$lt: new Date("2016-01-01")}
})

//6 Find all orders with an orderDate that is after 1/1/2016.
db.orders.find({
    orderDate: {$gt: new Date("2016-01-01")}
})

//7 Find orders with lineItems that have a quantity that is less than 50, but greater than 5.
db.orders.find(
  {$and: [ {"lineItems.quantity": {$gt: 5} },  {"lineItems.quantity": {$lt: 50} } ]
})

//8 Update one of your line items to 42.99
db.orders.update({"lineItems.unitPrice": 10.00}, {unitPrice: 42.99})

//9 Remove one of your orders.
db.orders.remove({"_id" : ObjectId("57474f98b9ab822633bff23f")})
