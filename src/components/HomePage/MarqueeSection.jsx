import { useSpring, animated } from "@react-spring/web";

const MarqueeSection = () => {
  const marqueeAnimation = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-100%)" },
    config: { duration: 20000 }, // Adjust speed here
    reset: true,
    loop: true,
  });

  return (
    <div className="bg-black py-[3rem] text-white">
      <h2 className="text-center text-[1.7rem] mb-4">
        Companies We&#39;ve Worked With
      </h2>
      <div className="overflow-hidden mt-[3rem]">
        <animated.div style={marqueeAnimation} className="flex space-x-6">
          {/* Company Logos */}
          <img src="path/to/company1.png" alt="Company 1" className="h-12" />
          <img src="path/to/company2.png" alt="Company 2" className="h-12" />
          <img src="path/to/company3.png" alt="Company 3" className="h-12" />
          <img src="path/to/company4.png" alt="Company 4" className="h-12" />

          {/* Duplicating for continuous effect */}
          <img src="path/to/company1.png" alt="Company 1" className="h-12" />
          <img src="path/to/company2.png" alt="Company 2" className="h-12" />
          <img src="path/to/company3.png" alt="Company 3" className="h-12" />
          <img src="path/to/company4.png" alt="Company 4" className="h-12" />
        </animated.div>
      </div>
    </div>
  );
};

export default MarqueeSection;
