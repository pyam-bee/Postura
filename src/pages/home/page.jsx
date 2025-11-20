import { motion } from "framer-motion";
import PosturaOriginal from "../../components/posturaOriginal/PosturaOriginal.jsx";

const Home = () => {
  {/* Posters Cards */}
  const bestSellerProducts = [
    { src: "/assets/posters/best sellers/Ducati 1199.png", title: "Ducati 1199", alt: "bestSeller1"},
    { src: "/assets/posters/best sellers/Porsche 911 GT3 RS.png", title: "Porsche 911 GT3 RS", alt: "bestSeller2"},
    { src: "/assets/posters/best sellers/CR7.png", title: "Cr7", alt: "bestSeller3"},
    { src: "/assets/posters/best sellers/Airplane Sky Minimal.png", title: "Airplane Sky Minimal", alt: "bestSeller4"},
    { src: "/assets/posters/best sellers/Bloom.png", title: "Bloom", alt: "bestSeller5"},
    { src: "/assets/posters/best sellers/Sunflower Japanese Spitz.png", title: "Sunflower Japanese Spitz", alt: "bestSeller6"},
    { src: "/assets/posters/best sellers/Computer.png", title: "Computer", alt: "bestSeller7"},
    { src: "/assets/posters/best sellers/Primitive Music.png", title: "Primitive Music", alt: "bestSeller8"},
  ]

  const containerVariants = {
    hidden:{
      opacity: 0
    },
    visible:{
      opacity: 1,
      transition:{
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden:{
      opacity: 0,
      y: 439
    },
    visible: {
      opacity: 1,
      y: 0,
      transition:{
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0
    },
    visible:{
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1
      }
    }
  }

  return (
      <div className="w-full min-h-screen">
        {/* Banner */}
        <div className="border-b relative">
          <img className="w-full" src="/assets/sale/banner.png" alt="banner" />

          <img 
            className="absolute top-[30%] right-[10%] w-[200px] h-auto pointer-events-none"
            src="/assets/cursor-unscreen.gif" 
            alt="cursor animation"
          />

        </div>

        {/* Heading */}
        <div className="flex item-center justify-center pt-5">
          <div className="pb-5">
            <h2 className="text-3xl font-helvetica-medium uppercase
              relative 
              after:content-[''] 
              after:absolute 
              after:left-1/2 
              after:bottom-0 
              after:-translate-x-1/2 
              after:h-[1px] 
              after:w-[190px] 
              after:bg-black
              tracking-wide
              pb-2">
                best seller
            </h2>
          </div>
        </div>

        {/* Photocards for Best Sellers */}
        <div className="w-full max-w-[1600px] mx-auto px-5 pb-20 overflow-hidden">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            >
            {bestSellerProducts.map((item, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="flex flex-col items-center group cursor-pointer"
                >
                {/* Image Container */}
                <div className="w-full aspect-2/3 overflow-hidden relative">
                  <img className="w-full h-full object-cover"
                  src={item.src} alt={item.alt} />
                </div>
                
                {/* Text w Animation*/}
                <motion.p variants={textVariants} className="text-[18px] font-lemonmilk tracking-wider text-center">{item.title}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Postura Originals */}
        {/* Image Slider */}
        <PosturaOriginal />
        <style>
          .smooth-scrol{`
            scroll-behaviour: smooth;
          `}
        </style>
      </div>
  )
}

export default Home;