import Image from 'next/image'
export default function Community() {

  return (
    <section className="flex flex-col items-center min-h-screen bg-green-700 text-white">
      <div className="m-10">
        <h1 className="text-5xl text-dark-green mb-4">Community Forum</h1>
        <p className="text-2xl text-dark-green">Connect with others, share ideas, and discuss sustainable living.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <Image src="/beacon.webp" height={500} width={500} alt="Community Banner" className="w-full rounded-lg shadow-lg" />
        </div>

        <h2 className="text-3xl text-green-800 mb-4">Join the Green Beacon Community</h2>
        <p className="text-lg mb-4 text-green-800">At Green Beacon, we believe that creating a strong and supportive community is essential for promoting sustainable living. Join our community forum to connect with like-minded individuals, share ideas, and learn from one another.</p>
        <p className="text-lg mb-6 text-green-800">Together, we can make a real difference in creating a greener future for our planet.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-green-800 rounded-lg p-6">
            <h3 className="text-2xl text-white mb-2">Get Involved</h3>
            <p className="text-white mb-4">There are many ways you can get involved and make a positive impact in your community:</p>
            <ul className="list-disc list-inside text-white">
              <li>Volunteer for local environmental organizations</li>
              <li>Participate in community clean-up events</li>
              <li>Organize educational workshops</li>
              <li>Support sustainable businesses in your area</li>
            </ul>
          </div>
          <div className="bg-green-800 rounded-lg p-6">
            <h3 className="text-2xl text-white mb-2">Spread the Word</h3>
            <p className="text-white mb-4">One of the most effective ways to create a larger impact is to spread the word and inform others about sustainable living:</p>
            <ul className="list-disc list-inside text-white">
              <li>Share eco-friendly tips and resources on social media</li>
              <li>Host sustainable living events and invite friends and family</li>
              <li>Start a sustainability book club or discussion group</li>
              <li>Encourage others to join the Green Beacon community</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
