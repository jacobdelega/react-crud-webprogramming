import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const SlidingText = ({ text }) => {
    const [key, setKey] = useState(1);
    const scrolling = useSpring({
        from: { transform: "translateX(60%)" },
        to: { transform: "translateX(-60%)" },
        reset: true,
        reverse: true,
        onRest: () => setKey(key + 1),
        config: { duration: 4000 },
    });

    return (
        <div key={key}>
            <animated.div style={scrolling} classname='w-full h-52 bg-slate-50'>
                <div className='flex items-center justify-between h-full'>
                    <h1 className='ml-8 text-xl font-bold text-slate-500'>MarketSimp</h1>
                    <h1 className='text-xl font-bold text-slate-500'>Gymshark</h1>
                    <h1 className='text-xl font-bold text-slate-500'>YoungLA</h1>
                    <h1 className='mr-8 text-xl font-bold text-slate-500'>RandomGym</h1>
                </div>
            </animated.div>
        </div>
    );
};

export default SlidingText;
