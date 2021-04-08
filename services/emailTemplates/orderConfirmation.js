const keys = require('../../config/keys')

module.exports = (order) => {
  return `
    <html>
      <body>
        <div style='text-align: center'>
          <h3>Your Order Recipt</h3>
          <p>Items: ${order.itemsOrdered}</p>
          <p>Total Cost: ${order.cost}}</p>
          <p>Date: ${order.dateOrdered}</p>
          <br>
          <p>You earned ${order.pointsAwarded} points with this order!</p>
        </div>
      </body>
    </html>
  `;
};
