"use client";

import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#001233] text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold px-4">
            One Software, Every Solution
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-300 px-4">
            The comprehensive university clinic management system, simplifying
            and optimizing administrative tasks for all types and sizes of
            educational institutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
          {/* Feature 1 - Easy to Use */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left px-4">
            <div className="flex-shrink-0">
              <Image
                src="/easytouse.svg"
                alt="Easy to Use"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">Easy to Use</h3>
              <p className="text-gray-300 text-base md:text-lg">
                No complicated menus or confusing jargon, just a clean and
                easy-to-use platform that gets the job done.
              </p>
            </div>
          </div>

          {/* Feature 2 - Automatic Updates */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left px-4">
            <div className="flex-shrink-0">
              <Image
                src="/autoupdate.svg"
                alt="Automatic Updates"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">
                Automatic Updates
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                With automatic updates that keep you up-to-date with the latest
                features and improvements.
              </p>
            </div>
          </div>

          {/* Feature 3 - 100% Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left px-4">
            <div className="flex-shrink-0">
              <Image
                src="/responsive.svg"
                alt="100% Responsive"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">100% Responsive</h3>
              <p className="text-gray-300 text-base md:text-lg">
                Software designed to work seamlessly across all devices and
                screen sizes. Whether you're using a desktop computer, laptop,
                tablet, or smartphone.
              </p>
            </div>
          </div>

          {/* Feature 4 - Rich Documentation */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left px-4">
            <div className="flex-shrink-0">
              <Image
                src="/richdoc.svg"
                alt="Rich Documentation"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">
                Rich Documentation
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                Makes it easy to learn and use, you'll have access to
                comprehensive and well-organized documentation, including user
                guides and video tutorials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
