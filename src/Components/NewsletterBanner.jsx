

const NewsletterBanner = () => {
  return (
    <div><div className="bg-purple-500 text-white rounded-lg p-8 text-center mb-12">
    <h2 className="text-3xl font-bold mb-2">Have Amazing Projects?</h2>
    <p className="text-sm mb-6">
      Do you have any projects to create? Okay, lets create with us. Enter
      your email and connect with us.
    </p>
    <div className="flex justify-center gap-2">
      <input
        type="email"
        placeholder="Enter your email address"
        className="p-2 w-2/3 max-w-sm rounded-md text-gray-700 focus:outline-none"
      />
      <button className="bg-white text-purple-500 font-medium px-4 py-2 rounded-md hover:bg-gray-200">
        Subscribe
      </button>
    </div>
  </div></div>
  )
}

export default NewsletterBanner