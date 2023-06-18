import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col items-center min-h-screen bg-green-700 text-white">
      <section className="m-10">
        <h1 className="text-5xl text-dark-green mb-4">Welcome to Green Beacon</h1>
        <p className="text-2xl text-dark-green">Embrace a lifestyle thats good for you and the Earth.</p>
      </section>
      
      <section className="w-full max-w-2xl mx-auto px-6 py-10 mb-12 bg-white text-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl mb-3 text-green-800">Why Embrace Sustainable Living?</h2>
        <p className="text-lg mb-3">Our planet is under increasing pressure from the unsustainable actions of the human race. Overuse of natural resources, pollution, and disregard for ecosystems are leading to significant environmental and health crises. But we can change this. By making conscious, sustainable choices, we can help restore balance and promote a healthy planet.</p>
        <p className="text-lg mb-3">Here are some ways you can start making a difference:</p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-left">
          <li className="flex"><span className="mr-2">➤</span>Effective land use and wildlife protection</li>
          <li className="flex"><span className="mr-2">➤</span>Sustainable water usage</li>
          <li className="flex"><span className="mr-2">➤</span>Supporting local and organic foods</li>
          <li className="flex"><span className="mr-2">➤</span>The use of sustainable materials</li>
          <li className="flex"><span className="mr-2">➤</span>The use of sustainable transport</li>
          <li className="flex"><span className="mr-2">➤</span>Zero waste and zero carbon</li>
          <li className="flex"><span className="mr-2">➤</span>Creating your own healthy environment</li>
          <li className="flex"><span className="mr-2">➤</span>Respecting and realizing local cultural values</li>
        </ul>
      </section>

      <section className="mb-12 w-full max-w-2xl mx-auto px-6 py-10 bg-white text-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl text-green-800 mb-3">The Power of Reusable Water Bottles</h2>
        <Image src="/images/water-bottle.jpg" width={500} height={300} alt="Reusable Water Bottle" className="w-full object-cover mb-4" />
        <p className="text-lg mb-6">Did you know that by switching to a reusable water bottle, you could save up to $3,000 a year? Not to mention, youd be reducing your consumption of single-use plastics and contributing to a healthier planet. So why wait? Make the switch today!</p>
      </section>

      <section className="flex flex-wrap justify-around">
        <div className="m-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={()=>window.location.href='/tips'}>
          <div className="h-48 relative">
            <Image src="/images/green-energy.jpg" layout="fill" objectFit="cover" alt="Green energy" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl text-green-800">Green Energy</h2>
            <p className="text-gray-700">Discover the power of renewable energy.</p>
          </div>
        </div>

        <div className="m-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={()=>window.location.href='/products'}>
          <div className="h-48 relative">
            <Image src="/images/eco-products.jpg" layout="fill" objectFit="cover" alt="Eco products" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl text-green-800">Eco-Friendly Products</h2>
            <p className="text-gray-700">Explore products that are kind to the environment.</p>
          </div>
        </div>

        <div className="m-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={()=>window.location.href='/community'}>
          <div className="h-48 relative">
            <Image src="/images/community.jpg" layout="fill" objectFit="cover" alt="Community" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl text-green-800">Community</h2>
            <p className="text-gray-700">Join others passionate about sustainable living.</p>
          </div>
        </div>
      </section>
    </section>
  );
}