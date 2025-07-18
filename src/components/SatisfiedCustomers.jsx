const SatisfiedCustomers = () => {
  const customerImages = [
    "cloth/satis1.jpg",
    "cloth/satis2.jpg",
    "cloth/satis3.jpg",
    "cloth/satis4.jpg",
    "cloth/satis5.jpg",
    "cloth/s1.jpg",
    "cloth/s2.jpg",
    "cloth/s3.jpg",
    "cloth/s4.jpg",
    "cloth/s5.jpg"
  ]

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="section-title text-white mb-12 font-display">
            Over 1,000,000+ Satisfied Customers
          </h3>
        </div>

        <div className="overflow-hidden">
          <div className="space-y-6">
            {/* First row */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
              {customerImages.slice(0, 5).map((image, index) => (
                <div
                  key={`img-${index}`}
                  className={`${index >= 3 ? 'hidden md:block' : ''}`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img
                      src={image}
                      alt={`Customer showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second row */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
              {customerImages.slice(5, 10).map((image, index) => (
                <div
                  key={`img-${index+5}`}
                  className={`${index >= 3 ? 'hidden md:block' : ''}`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img
                      src={image}
                      alt={`Customer showcase ${index + 6}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SatisfiedCustomers