import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurStory = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Desktop horizontal translation stays exactly as you had it
  const xTranslation = useTransform(scrollYProgress, [0.3, 0.9], ['0%', '-150%']);

  const stats = [
    { num: "53", label: "HOUSES WERE BUILT" },
    { num: "5+", label: "YEARS" },
    { num: "12", label: "HOME SETUPS" }
  ];

  return (
    // Lowered height for mobile (auto) so it doesn't create huge blank space
    <div ref={containerRef} className="relative h-auto lg:h-[800vh] bg-white">
      
      {/* Mobile/Tablet: Relative (scrolls normally)
          Desktop (lg): Sticky (locks in place for motion)
      */}
      <div className="relative lg:sticky lg:top-0 lg:overflow-hidden flex flex-col justify-center py-12 lg:py-20">
        
        {/* Text Content Area */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <span className="uppercase tracking-widest text-sm font-semibold text-gray-500 block mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                Pody started with a <br className="hidden lg:block" /> simple but powerful idea.
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Traditional construction often brings delays, unclear costs, and limited flexibility. 
                We set out to change that by creating a modular building system that prioritizes 
                efficiency, transparency, and quality at every stage.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Section */}
        <div className="relative w-full px-6 md:px-12">
          <div className="max-w-7xl mx-auto relative">
            
            {/* Mobile: flex-col (Vertical Stack) 
                Desktop: flex-row items-end (Your original layout)
            */}
            <div className="flex flex-col lg:flex-row lg:items-end gap-0">
              
              {/* Image Container */}
              <div className="w-full lg:w-3/5 z-10 overflow-hidden rounded-lg shadow-2xl mb-10 lg:mb-0">
                <img 
                  src="https://cdn.prod.website-files.com/693e9d1043906400d3af572d/6942826103443d922712e9ae_2149571922.webp" 
                  alt="Modular Home"
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </div>

              {/* Stats Section */}
              <div className="w-full lg:w-2/3 lg:-ml-20 lg:pb-40 lg:overflow-hidden">
                
                {/* Mobile/Tablet: Hidden Motion, Show Vertical List (image_56aa60 style)
                    Desktop: Show Motion (Your original style)
                */}
                
                {/* MOBILE/TABLET VIEW (Static List with Borders) */}
                <div className="block lg:hidden space-y-0">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap- py-8 border-t border-gray-100 last:border-b">
                      <span className="text-6xl font-bold text-gray-900 min-w-[100px]">{stat.num}</span>
                      <span className="text-gray-900 uppercase tracking-widest text-sm font-bold">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* DESKTOP VIEW (Your exact horizontal motion) */}
                <motion.div 
                  style={{ x: xTranslation }}
                  className="hidden lg:flex gap-28 ml-70 items-center whitespace-nowrap pt-0"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-9xl font-bold text-gray-900">{stat.num}</span>
                      <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;