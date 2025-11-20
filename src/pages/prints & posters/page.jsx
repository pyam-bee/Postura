import React, { useState } from 'react';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Insta from "../../../public/assets/posters/social-icons/instagram.png";
import Whatsapp from "../../../public/assets/posters/social-icons/whatsapp.png";
import Tiktok from "../../../public/assets/posters/social-icons/tik-tok.png";

// Generate all 100 prints dynamically - NEVER hardcode this
const generatePrints = () => {
  const titles = [
    "Ducati 1199", "Porsche 911 GT3 RS", "CR7", "Airplane Sky Minimal", "Bloom",
    "Sunflower Japanese Spitz", "Computer", "Primitive Music", "Abstract Art", "Mountain View",
    "Ocean Waves", "City Lights", "Vintage Car", "Modern Architecture", "Nature Scene",
    "Space Galaxy", "Minimalist Design", "Pop Art", "Street Photography", "Wildlife"
  ];
  
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    src: `/assets/posters/prints/print-${i + 1}.png`,
    title: titles[i % titles.length] + ` ${Math.floor(i / titles.length) + 1}`,
    alt: `print-${i + 1}`
  }));
};

const PrintsGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPrint, setSelectedPrint] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const ITEMS_PER_PAGE = 20;
  const allPrints = generatePrints();
  
  // Filter prints based on search
  const filteredPrints = searchQuery
    ? allPrints.filter(print => 
        print.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allPrints;
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPrints.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPrints = filteredPrints.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  // Reset to page 1 when searching
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  
  const openModal = (print) => setSelectedPrint(print);
  const closeModal = () => setSelectedPrint(null);
  
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }
    
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Prints & Posters</h1>
          
          <div className="relative w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search prints..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {currentPrints.map((print) => (
            <div
              key={print.id}
              onClick={() => openModal(print)}
              className="relative aspect-[3/4] bg-white rounded shadow-md cursor-pointer hover:shadow-xl transition-shadow overflow-hidden group"
            >
              {/* Number Badge */}
              <div className="absolute top-2 left-2 bg-white text-black font-family-chromeslab w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold z-10">
                {print.id}
              </div>
              
              {/* Actual Image */}
              <img 
                src={print.src} 
                alt={print.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback for failed images */}
              <div className="w-full h-full bg-gray-800 items-center justify-center text-white p-4 hidden flex-col">
                <span className="text-xs mb-2">Image not found:</span>
                <span className="text-xs text-gray-400 text-center break-all">{print.src}</span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {getPageNumbers().map((page, idx) => (
              page === '...' ? (
                <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded ${
                    currentPage === page
                      ? 'bg-gray-400 text-white'
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {page}
                </button>
              )
            ))}
            
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPrint && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-8 broder w-auto"
          onClick={closeModal}
        >
          <div 
            className="absolute bg-white border-yellow-200 border-2 max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 flex flex-row justify-between w-[1000px]">
              {/* Modal Image */}
              <img 
                src={selectedPrint.src} 
                alt={selectedPrint.alt}
                className="w-[490px] h-[700] object-cover rounded p-10"
              />
              
              <div className="flex flex-col justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedPrint.title}</h2>
                  <p className="text-gray-600">Print #{selectedPrint.id}</p>
                </div>
                
                <div className="flex flex-col w-full items-end text-right">
                  <p className="text-sm text-gray-500 mb-2">Available Sizes</p>
                  <div className="flex gap-2">
                    {['A1', 'A2', 'A3', 'A4'].map(size => (
                      <button 
                        key={size}
                        className="px-3 py-1 border border-black hover:bg-gray-100"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-row border-t pt-6">
                  <p className="text-gray-500 mb-4 text-sm">
                    Scan this QR code or DM us the screenshot 🤍
                  </p>
                  
                  <img src={Insta} className='w-[40px] h-[40px]'/>
                  <img src={Whatsapp} className='w-[38px] h-[38px]'/>
                  <img src={Tiktok} className='w-[38px] h-[38px]'/>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintsGallery;