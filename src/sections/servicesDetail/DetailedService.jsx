const DetailedService = ({ service }) => {

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <section className="bg-[#ffffff] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#272425]">
            {service.title}
          </h1>

          <p className="mt-4 text-[#242323]">
            {service.description}
          </p>

          <ul className="mt-6 space-y-3">
            {service.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-[#191818]">
                <span className="text-[#f6AE22] mt-1">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(0,0,0,0.7)] transition"
          />
        </div>

      </div>
    </section>
  );
};

export default DetailedService;