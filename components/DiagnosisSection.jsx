"use client";

import Image from "next/image";

const DiagnosisSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Column - Image Preview */}
      <div>
        <Image
          src="/section2img1.png"
          alt="Preview image"
          width={1000}
          height={1000}
        />
      </div>

      {/* Right Column - Content */}
      <div className="space-y-6">
        <h2 className="text-5xl font-bold">
          <span className="text-[#844F93]">Diagnosis</span>{" "}
          <span className="text-gray-900">Management</span>
        </h2>
        <p className="text-lg text-gray-900 leading-relaxed">
          Effortlessly oversee patient diagnoses with our Diagnosis Management
          feature. Streamline record-keeping, analysis, and tracking, empowering
          university clinics to provide precise and efficient healthcare
          services.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>

      {/* subsection 2 */}

      {/* Left Column - Content */}
      <div className="space-y-6">
        <h2 className="text-5xl font-bold">
          <span className="text-[#844F93]">Student</span>{" "}
          <span className="text-gray-900">Management</span>
        </h2>

        <div className="flex flex-row gap-10 border-1 border-gray-300 p-6">
          <img src="/people-Vector.svg" alt="people-icon" />
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold"> Centralized Data Management </p>
            <p className="text-sm text-gray-900"> All data in one place </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 border-1 border-gray-300 p-6">
          <img src="/person-Vector.svg" alt="person-icon" />
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold"> Student Data Management </p>
            <p className="text-sm text-gray-900">
              {" "}
              Adding, editing, updating of members data.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Left Column - Image Preview */}
      <div>
        <Image
          src="/section2img2.png"
          alt="Preview image"
          width={1000}
          height={1000}
        />
      </div>

      {/* subsection 3 */}
      <div>
        <Image
          src="/section2img3.png"
          alt="Preview image"
          width={1000}
          height={1000}
        />
      </div>
      {/* Right Column - Content */}
      <div className="space-y-6">
        <h2 className="text-5xl font-bold">
          <span className="text-[#844F93]">Track</span>{" "}
          <span className="text-gray-900">Student's Health</span>
        </h2>
        <div className="flex flex-row gap-4">
          <span>
            {" "}
            <img src="/good-Vector.svg" alt="" />{" "}
          </span>
          <p> Tracking of Student's Health </p>
        </div>
        <div className="flex flex-row gap-4">
          <span>
            {" "}
            <img src="/good-Vector.svg" alt="" />{" "}
          </span>
          <p> Efficient Record Keeping </p>
        </div>
        <div className="flex flex-row gap-4">
          <span>
            {" "}
            <img src="/good-Vector.svg" alt="" />{" "}
          </span>
          <p> Impecable methods </p>
        </div>
        <div className="flex flex-row gap-4">
          <span>
            {" "}
            <img src="/good-Vector.svg" alt="" />{" "}
          </span>
          <p> Prolific clarity </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
