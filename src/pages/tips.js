import { useState } from 'react';

export default function Tips() {
  const [currentTip, setCurrentTip] = useState(null);

  const tips = [
    {
      title: "Reduce Energy Consumption",
      fact: "Unplug electronics when not in use to save energy.",
    },
    {
      title: "Conserve Water",
      fact: "Turn off the tap while brushing your teeth to save water.",
    },
    {
      title: "Go Plant-Based",
      fact: "Eating a plant-based diet can help reduce greenhouse gas emissions.",
    },
    {
      title: "Choose Sustainable Transportation",
      fact: "Opt for walking, biking, or public transportation whenever possible.",
    },
    {
      title: "Recycle Properly",
      fact: "Make sure to sort and recycle items according to local recycling guidelines.",
    },
    {
      title: "Reduce Food Waste",
      fact: "Plan meals, buy only what you need, and compost food scraps.",
    },
    {
      title: "Switch to LED Bulbs",
      fact: "Replace traditional bulbs with energy-efficient LED light bulbs.",
    },
    {
      title: "Avoid Single-Use Plastics",
      fact: "Use reusable bags, bottles, and utensils to reduce plastic waste.",
    },
    {
      title: "Support Sustainable Fashion",
      fact: "Choose clothing made from eco-friendly materials and support ethical fashion brands.",
    },
    {
      title: "Grow Your Own Food",
      fact: "Start a small garden or grow herbs and vegetables indoors.",
    },
    {
      title: "Use Natural Cleaning Products",
      fact: "Switch to non-toxic and biodegradable cleaning products.",
    },
  ];

  const handleCardClick = (index) => {
    if (currentTip === index) {
      setCurrentTip(null);
    } else {
      setCurrentTip(index);
    }
  };

  return (
    <section className="flex flex-col items-center min-h-screen bg-green-700 text-white">
      <div className="m-10">
        <h1 className="text-5xl text-dark-green mb-4">Tips and Guides</h1>
        <p className="text-2xl text-dark-green">Learn how to live sustainably with our comprehensive guides.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={`border-2 border-green-700 p-4 mb-4 cursor-pointer transition-colors ${
              currentTip === index ? 'bg-green-700 text-white' : 'bg-white text-green-700'
            }`}
            onClick={() => handleCardClick(index)}
          >
            <h2 className="text-xl font-bold mb-2">{tip.title}</h2>
            {currentTip === index ? (
              <p className="text-gray-200">{tip.fact}</p>
            ) : (
              <p className="text-gray-700">Click to reveal the tip</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
