
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Plus, Minus, Trash2, ShoppingCart, Download } from 'lucide-react'; // Import Lucide React Icons
import burger from './assets/burger.jpg';
import pizza from './assets/pizza.jpg';
import pasta from './assets/pasta.jpg';
import colarj from './assets/colarj.jpg';
import sandwhichrj from './assets/sandwhichrj.jpg';
import logocanteen from './assets/logocanteen.png';
import friesrj from './assets/friesrj.jpg';
// import axios from 'axios';
const Canteen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const foodItems = [
    { id: 1, name: 'Burger', price: 100, image: burger },
    { id: 2, name: 'Pizza', price: 200, image: pizza },
    { id: 3, name: 'Pasta', price: 150, image: pasta },
    { id: 4, name: 'Fries', price: 50, image: friesrj },
    { id: 5, name: 'Cola', price: 30, image: colarj },
    { id: 6, name: 'Sandwich', price: 80, image: sandwhichrj },
  ];

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const handleIncreaseQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const generateMenuPDF = () => {
    const doc = new jsPDF();
    doc.setFont('Helvetica', 'normal');
    try {
      doc.addImage(logocanteen, 'PNG', 70, 10, 70, 30);
    } catch (error) {
      console.error('Error adding logo:', error);
    }
    doc.setFontSize(18);
    doc.text('Weekly Menu', 105, 50, { align: 'center' });
    let startY = 60;
    doc.setFontSize(12);
    doc.text('Day', 20, startY);
    doc.text('Breakfast', 60, startY);
    doc.text('Lunch', 110, startY);
    doc.text('Dinner', 160, startY);
    doc.line(20, startY + 2, 190, startY + 2);
    startY += 10;
    const tableData = [
      ['Monday', 'Poha', 'Dal Chawal', 'Bhindi'],
      ['Tuesday', 'Upma', 'Pizza', 'Paneer Butter Masala'],
      ['Wednesday', 'Idli', 'Kachori', 'Pav Bhaji'],
      ['Thursday', 'Sheera', 'Panipuri', 'Mutter Paneer'],
      ['Friday', 'Dosa', 'Pasta', 'Gobi ki Sabji'],
      ['Saturday', 'Utapa', 'Sandwich', 'Baingan ka Bharta'],
      ['Sunday', 'Mendu Vada', 'Pizza', 'Tamatar ki Sabji'],
    ];
    tableData.forEach((row) => {
      doc.text(row[0], 20, startY);
      doc.text(row[1], 60, startY);
      doc.text(row[2], 110, startY);
      doc.text(row[3], 160, startY);
      startY += 10;
    });
    doc.save('Menu.pdf');
  };

  const generateBillPDF = async() => {
    const doc = new jsPDF();
    doc.setFont('Helvetica', 'normal');
    try {
      doc.addImage(logocanteen, 'PNG', 70, 10, 70, 30);
    } catch (error) {
      console.error('Error adding logo:', error);
    }
    doc.setFontSize(18);
    doc.text('Billing Receipt', 105, 50, { align: 'center' });
    if (cart.length === 0) {
      alert('Cart is empty. Cannot generate bill.');
      return;
    }
    let startY = 60;
    doc.setFontSize(12);
    doc.text('Item', 20, startY);
    doc.text('Price', 80, startY);
    doc.text('Quantity', 120, startY);
    doc.text('Total', 160, startY);
    doc.line(20, startY + 2, 190, startY + 2);
    startY += 10;
    cart.forEach((item) => {
      doc.text(item.name, 20, startY);
      doc.text(`Rs ${item.price}`, 80, startY);
      doc.text(`${item.quantity}`, 120, startY);
      doc.text(`Rs ${item.price * item.quantity}`, 160, startY);
      startY += 10;
    });
    doc.setFontSize(14);
    doc.text(`Total: Rs ${calculateTotal()}`, 105, startY + 10, { align: 'center' });
    doc.save('Bill.pdf');
  //   try {
  //     const response = await axios.post('http://localhost:8080/send-sms');

  //     if (response.status === 200) {
  //         console.log('WhatsApp message sent successfully!');
  //     } else {
  //         console.error('Failed to send WhatsApp message');
  //     }
  // } catch (error) {
  //     console.error('Error sending WhatsApp message:', error);
  // }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 p-4">
      <div className="lg:w-1/4 bg-blue-600 text-white p-6 rounded-2xl shadow-xl mb-4 lg:mb-0 lg:mr-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Billing Summary</h2>
        {cart.length === 0 ? (
          <p className="text-center text-sm">No items in the cart.</p>
        ) : (
          <div className="space-y-3">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-blue-500 p-2 rounded-xl">
                <span>{item.name} x{item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="ml-2 text-xs underline hover:text-gray-200 flex items-center gap-1"
                >
                  <Trash2 size={14} /> Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 pt-4 border-t border-blue-300">
          <h3 className="text-lg font-semibold">Total: ₹{calculateTotal()}</h3>
          <button
            onClick={generateBillPDF}
            className="mt-4 w-full bg-white text-blue-600 font-semibold py-2 rounded-full hover:bg-blue-100 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} /> Checkout
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search for food"
            value={searchTerm}
            onChange={handleSearch}
            className="p-3 border border-blue-300 rounded-full w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={generateMenuPDF}
            className="mt-4 sm:mt-0 bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 flex items-center gap-2"
          >
            <Download size={16} /> Download Menu
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {foodItems.filter(item => item.name.toLowerCase().includes(searchTerm)).map(item => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-blue-600">{item.name}</h3>
                  <span className="text-blue-500 font-semibold">₹{item.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="bg-blue-600 text-white w-8 h-8 rounded-full hover:bg-blue-700 flex items-center justify-center"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="bg-blue-600 text-white w-8 h-8 rounded-full hover:bg-blue-700 flex items-center justify-center"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-600 text-white py-1 px-4 rounded-full hover:bg-blue-700 flex items-center gap-1"
                  >
                    <Plus size={14} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Canteen;