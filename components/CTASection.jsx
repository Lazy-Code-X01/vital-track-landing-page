"use client";

const CTASection = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tilted boxes container */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          {/* First tilted box (back) */}
          <div
            className="absolute inset-0 bg-[#844F93]"
            style={{
              transform: "rotate(5deg) scale(1.02)",
              transformOrigin: "center",
              borderRadius: "16px",
              top: "5%",
            }}
          ></div>

          {/* Second tilted box (front) */}
          <div
            className="absolute inset-0 bg-[#001233]"
            style={{
              transform: "rotate(-2deg) scale(1.02)",
              transformOrigin: "center",
              borderRadius: "16px",
            }}
          ></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
              <div className="space-y-4 md:space-y-6">
                <p className="text-xs sm:text-sm uppercase tracking-wider font-medium">
                  TRY OUR SOFTWARE!
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  Try our software!
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
                  We designed and tested prototypes that helped identify pain
                  points in the account creation process. Together, we shaped
                  the new standard.
                </p>

                <div className="flex flex-col items-center space-y-4">
                  <button className="bg-[#844F93] hover:bg-[#9A5DAD] text-white w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105">
                    Request a demo
                  </button>

                  <p className="text-xs text-gray-400">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
