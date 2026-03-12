import { useState } from "react";
import { certificates } from "../../constants";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase">Achievements & Certificates</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my recent learning experiences, certifications, and extra-curricular involvements.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => handleOpenModal(cert)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
          >
            <div className="p-4 bg-white flex justify-center items-center h-48">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-gray-500 mb-2 font-medium">
                {cert.issuer}
              </p>
              <p className="text-sm text-purple-400 mb-4 font-semibold">
                {cert.date}
              </p>
              <p className="text-gray-400 pt-2 line-clamp-3 text-sm mt-auto">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-gray-700">
            <div className="flex justify-end p-2 absolute top-0 right-0 z-10 w-full bg-gradient-to-b from-black/60 to-transparent">
              <button
                onClick={handleCloseModal}
                className="text-white text-4xl font-bold hover:text-purple-500 drop-shadow-md pr-4 pt-2"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col max-h-[90vh]">
              <div className="w-full flex justify-center bg-white p-4 items-center min-h-[40vh] relative overflow-hidden">
                {/* Background blur for images that don't fit perfectly */}
                <div 
                   className="absolute inset-0 opacity-20 bg-cover bg-center blur-xl scale-110"
                   style={{ backgroundImage: `url(${selectedCertificate.image})` }}
                />
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="lg:max-h-[50vh] max-h-[40vh] w-auto object-contain rounded-xl shadow-lg relative z-10 mix-blend-multiply"
                />
              </div>
              <div className="lg:p-8 p-6 overflow-y-auto">
                <h3 className="lg:text-3xl font-bold text-white mb-2 text-xl leading-tight">
                  {selectedCertificate.title}
                </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b border-gray-700 pb-4">
                    <p className="text-gray-300 font-semibold text-lg">
                      {selectedCertificate.issuer}
                    </p>
                     <p className="text-purple-400 font-semibold mt-1 sm:mt-0">
                      {selectedCertificate.date}
                    </p>
                  </div>
                <p className="text-gray-400 lg:text-base text-sm leading-relaxed">
                  {selectedCertificate.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
