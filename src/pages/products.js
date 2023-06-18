export default function Products() {
  const products = [
    { name: "Reusable Water Bottle", description: "Stay hydrated while reducing plastic waste.", score: 4 },
    { name: "Bamboo Toothbrush", description: "Eco-friendly alternative to plastic toothbrushes.", score: 5 },
    { name: "Organic Cotton Tote Bag", description: "Ditch single-use plastic bags for a reusable option.", score: 4.5 },
    { name: "Solar-Powered Phone Charger", description: "Charge your phone on the go using clean, renewable energy.", score: 4 },
    { name: "Biodegradable Bamboo Cutlery Set", description: "Perfect for picnics or on-the-go meals without plastic waste.", score: 4.5 },
    { name: "Energy-Efficient LED Light Bulbs", description: "Reduce energy consumption and save money on electricity bills.", score: 5 },
    { name: "Organic Shampoo Bar", description: "Gentle on your hair and the environment, free from harmful chemicals.", score: 4 },
    { name: "Reusable Beeswax Food Wraps", description: "Replace single-use plastic wrap with a sustainable alternative.", score: 4.5 },
    { name: "Fair Trade Coffee Beans", description: "Support farmers and choose coffee produced sustainably.", score: 5 },
    { name: "Recycled Paper Notebook", description: "Jot down your thoughts on eco-friendly paper.", score: 4 },
    // Add more products as needed
  ];

  return (
    <section className="flex flex-col items-center min-h-screen bg-green-700 text-white">
      <div className="m-10">
        <h1 className="text-5xl text-dark-green mb-4">Eco-friendly Products</h1>
        <p className="text-2xl text-dark-green">Discover sustainable alternatives to conventional products.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg px-8 py-6">
        {products.map((product, index) => (
          <div key={index} className="border-b-2 border-gray-300 pb-4 mb-4">
            <h2 className="text-xl font-bold text-green-800 mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-yellow-500 mr-1">&#9733;</span>
              {/* Render more stars based on the product score */}
              <span className="text-gray-400">{product.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
