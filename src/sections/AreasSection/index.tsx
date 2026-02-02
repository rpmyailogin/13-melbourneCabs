import { MapPin } from 'lucide-react';

const areas = [
  'Dandenong',
  'Springvale',
  'Hampton Park',
  'Dandenong South',
  'Rowville',
  'Lyndhurst',
  'Dandenong North',
  'Endeavour Hills',
  'Cranbourne',
  'Noble Park',
  'Doveton',
  'Berwick',
  'Keysborough',
  'Hallam',
  'Clyde North',
  'Lynbrook'
];

export const AreasSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reliable taxi service across Melbourne's southeast suburbs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                  {area}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your area? Give us a call and we'll be happy to assist you!
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
