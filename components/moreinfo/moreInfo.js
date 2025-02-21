"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const pricingCards = [
  {
    id: 1,
    title: "",
    subtitle: "What I Bring to the Table",
    
    span: "md:col-span-2",
    content: (
        <>
          <div className="  flex flex-col gap-2 text-sm text-gray-200">
         <div><span className=" font-bold text-base">Rapid Self-Learner:</span> Give me a new stack, tool, or problem I will dissect it, master it, and ship results. Thanks, endless curiosity!</div> 
         <div><span className=" font-bold text-base"> Full-Stack Fluency:</span> From RESTful APIs to dynamic UIs,I speak the full language of the web</div>
         <div><span className=" font-bold text-base"> AI Pragmatist:</span> Built systems that learn, not just compute.</div>
         <div><span className=" font-bold text-base"> Precision Obsessed:</span> Code isn&rsquo;t “done” until it&rsquo;s clean, tested, and feels inevitable.</div>
          </div>
         
        </>
      ),
    bgColor: "bg-[#ffff0]",
  },
  {
    id: 2,
    title: "Why Hire Me?",
    description: "",
    content: (
        <>
          <div className=" text-gray-400 text-sm gap-2 flex-col flex">
     
  <div>
  🎯 You need a problem-solver, not just a coder: I thrive in chaos, whether it&rsquo;s 
  debugging legacy systems or designing a testing suite that catches ghosts.
  </div>
  
  <div>
  🎯 You value precision over speed: But if you want both? I&rsquo;ve got you.
  </div>
 
  <div>
  🎯 You&rsquo;re future-proofing your team: I&rsquo;ll upskill relentlessly to stay ahead—then 
  share what I learn.
  </div>

          </div>
          
        </>
      ),
      bgColor: "bg-[#ffff0]",
  },
  {
    id: 3,
    title: "Shapeshifter Mode",
    description: "Need a backend dev to architect microservices? A tester who codes automation scripts and understands user journeys? Or an AI engineer to turn data into decisions? Let&rsquo;s talk",
  
    
  },
  {
    id: 4,
    title: "Why I'm Not a Cookie-Cutter Dev:",
    
    content: (
        <>
          <div className=" text-gray-400 text-sm gap-2 flex-col flex">
     
  <div>
  I ask "What&rsquo;s the worst that could break?" before shipping.  
  </div>
  
  <div>
  I treat code like art refactoring until it&rsquo;s elegant, not just functional.</div>
 
  <div>
  My AI projects aren&rsquo;t just hype they solve actual problems
  </div>

          </div>
          
        </>
      ),
    span: "md:col-span-2",
    bgColor: "bg-[#ffff0]",
  },
];

const FeaturesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min lg:max-w-7xl lg:w-full"
      >
        {pricingCards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-container-${card.id}`}
            className={card.span || ""}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: card.id * 0.1 }}
          >
            <div
              className={`${card.bgColor || "bg-zinc-900"} border rounded-3xl border-zinc-800 p-8 h-full backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-zinc-800/50 relative overflow-hidden group`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ opacity: hoveredCard === card.id ? 1 : 0 }}
              />
              <div className="space-y-4 relative z-10">
                {card.title && (
                  <motion.h3
                    className="text-xl font-semibold text-white"
                    animate={{ scale: hoveredCard === card.id ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>
                )}

                {card.subtitle && (
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold leading-none tracking-tight text-[#F0BB78]"
                    animate={{ scale: hoveredCard === card.id ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.subtitle}
                  </motion.h2>
                )}

                {card.price && (
                  <div className="flex items-baseline gap-2">
                    <motion.span
                      className="text-[#FFE14D] text-2xl font-bold"
                      animate={{ scale: hoveredCard === card.id ? 1.1 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.price.current}
                    </motion.span>
                    {card.price.old && (
                      <span className="text-zinc-600 text-sm line-through">
                        {card.price.old}
                      </span>
                    )}
                  </div>
                )}

                {card.description && (
                  <p className="text-zinc-400 text-sm">{card.description}</p>
                )}

                {card.content && (
                  <div className="flex flex-wrap gap-2">{card.content}</div>
                )}
              </div>

              {card.badge && (
                <motion.div
                  className="absolute bottom-4 cursor-pointer right-6 bg-[#FFE14D] px-4 py-1 lg:py-2 rounded-full text-black font-medium"
                  animate={{ scale: hoveredCard === card.id ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {card.badge}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesGrid;