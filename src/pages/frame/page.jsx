import React from 'react'

const page = () => {

  const frames = [
    {
      id: 1,
      title: 'Midnight Black',
      description: 'Midnight Black is the most common and safest option of all. It suits both light and dark walls. With a semi-glossy finish, this frame complements any genre of art perfectly.',
      image: '/assets/frames/frame-1.png',
      frameImage: '/assets/frames/frame-1-display.png',
      bgColor: 'bg-black',
      textColor: 'text-white',
      align: 'left'
    },
    {
      id: 2,
      title: 'Earth Wood',
      description: 'Earth Wood is carved from real wood and looks best on lighter-colored walls, although a darker wall can also be its home if done right. The Earth Wood frame gives a warm hug to the art inside, creating a cozy, at-home feel.',
      image: '/assets/frames/frame-2.png',
      frameImage: '/assets/frames/frame-2-display.png',
      bgColor: 'bg-white',
      textColor: 'text-black',
      align: 'right'
    },
    {
      id: 3,
      title: 'Frost White',
      description: 'Frost White makes a bold statement that says, “Look at me!” The combination of a high-quality print and this frame will captivate any beholder. This frame is designed for those seeking a premium, minimal, and art-gallery-style aesthetic.',
      image: '/assets/frames/frame-3.png',
      frameImage: '/assets/frames/frame-3-display.png',
      bgColor: 'bg-black',
      textColor: 'text-white',
      align: 'left'
    }
  ];

  return (
    <div className='min-h-screen bg-white'> 
      {/* Frame Sections */}
      {frames.map((frame) => (
        <section 
          key={frame.id}
          className={`${frame.bgColor} ${frame.textColor} py-20 border-t border-b my-5 h-[650px]`}
        >
          <div className="max-w-8xl mx-auto px-8 h-full">
            <div className={`grid grid-cols-2 gap-16 h-full ${frame.align === 'right' ? 'direction-rtl' : ''}`}>
              {/* Text Content */}
              <div className={`space-y-6 w-full flex flex-col justify-center`}>
                <h2 className="text-[90px] tracking-wider font-family-chromeslab">{frame.title}</h2>
                <p className="text-2xl leading-7 w-full font-helvetica-thin">
                  {frame.description}
                </p>
              </div>

              {/* Frame Images */}
              <div className="relative flex justify-center gap-8 h-full">
                {/* Small frame detail image */}
                <div className={`w-64 h-80 shadow-2xl overflow-hidden flex-shrink-0 ${frame.align === 'left' && 'right' ? 'self-start' : 'self-end'}`}>
                  <div className="w-full h-full flex">
                    <img src={frame.image} alt="frame1" />
                  </div>
                </div>

                {/* Large frame display */}
                <div className={`w-80 h-96 ${frame.align === 'left' ? 'self-end' : 'self-start'}`}>
                  <div className="w-full h-full flex items-end justify-center">
                    <img src={frame.frameImage} alt="frameImage1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default page