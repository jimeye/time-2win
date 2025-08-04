'use client';

export default function SecuritySection() {
  return (
    <section className="bg-white py-8 sm:py-0">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-normal font-montserrat text-black">
            We use
          </h2>

          {/* QR Code et Logo Randomdraws */}
          <div className="flex justify-center items-center space-x-12 -mb-2">
            {/* QR Code */}
            <div className="bg-white p-2.4 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-white">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.randomdraws.com/about/"
                  alt="QR Code Randomdraws About"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Logo Randomdraws */}
            <div className="flex items-center space-x-4">
              <div className="w-36 h-36">
                <img 
                  src="/images/logo-randomdraws-com.webp"
                  alt="Randomdraws.com™ by TPAL"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Texte explicatif */}
          <div className="max-w-2xl mx-auto">
            <p className="font-montserrat font-normal text-[13px] leading-[20px] text-[rgb(10,2,2)] text-center">
              Time2Win uses a trusted third-party random number generator, Randomdraws, to select the winner. This ensures that every draw is fair, unbiased, and compliant with regulations, so you can participate with complete confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 