function Dashboard() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Fixed background image */}
      <img
        src="/images/netflix-logo.avif"
        alt="Netflix Background"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-50 animate-bg-fade"
      />

      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Centered and responsive content */}
      <div className="fixed inset-0 flex justify-center items-center px-4">
        <div className="text-center text-white max-w-[90%] sm:max-w-[80%] md:max-w-[600px]">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Welcome to Netflix Dashboard
          </h1>
          <p className="text-gray-300 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Enjoy your personalized content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
