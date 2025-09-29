// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function FixedRowAnimation({ children }) {
//     const [show, setShow] = useState([false, false, false]);
//     const [done, setDone] = useState(false);
//     const [showLogo, setShowLogo] = useState(false);
//     const [showBar, setShowBar] = useState(false);
//     const [typedText, setTypedText] = useState("");
//     const [finished, setFinished] = useState(false);

//     const fullText = "Sloara.Ai";

//     useEffect(() => {
//         const timers = [];

//         [0, 1, 2].forEach((i) => {
//             const t = setTimeout(() => {
//                 setShow((prev) => {
//                     const updated = [...prev];
//                     updated[i] = true;
//                     return updated;
//                 });

//                 if (i === 2) {
//                     const logoTimer = setTimeout(() => setShowLogo(true), 2000);
//                     timers.push(logoTimer);

//                     const hideTimer = setTimeout(() => setDone(true), 2000);
//                     timers.push(hideTimer);

//                     const barTimer = setTimeout(() => setShowBar(true), 3500);
//                     timers.push(barTimer);
//                 }
//             }, i * 1500);
//             timers.push(t);
//         });

//         return () => timers.forEach((t) => clearTimeout(t));
//     }, []);

//     // Typing effect for Sloara.Ai
//     useEffect(() => {
//         if (showBar) {
//             let i = 0;
//             const typing = setInterval(() => {
//                 if (i < fullText.length) {
//                     setTypedText((prev) => prev + fullText[i]);
//                     i++;
//                 } else {
//                     clearInterval(typing);

//                     // Jab typing finish ho jaye ga 1.5s baad next page show ho jaye ga
//                     setTimeout(() => setFinished(true), 1500);
//                 }
//             }, 300); // typing speed
//             return () => clearInterval(typing);
//         }
//     }, [showBar]);

//     if (finished) {
//         return (
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//             >
//                 {children}
//             </motion.div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
//             <AnimatePresence>
//                 {!done && (
//                     <motion.div
//                         initial={{ opacity: 1, y: 0 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -100 }}
//                         transition={{ duration: 1 }}
//                         className="text-white text-3xl font-bold flex space-x-8"
//                     >
//                         <span className="w-40 flex justify-center">
//                             {show[0] && (
//                                 <motion.span
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6 }}
//                                 >
//                                     Innovative
//                                 </motion.span>
//                             )}
//                         </span>

//                         <span className="w-40 flex justify-center">
//                             {show[1] && (
//                                 <motion.span
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6 }}
//                                 >
//                                     Imaginative
//                                 </motion.span>
//                             )}
//                         </span>

//                         <span className="w-40 flex justify-center">
//                             {show[2] && (
//                                 <motion.span
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6 }}
//                                 >
//                                     Inspirational
//                                 </motion.span>
//                             )}
//                         </span>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* Logo Animation (center zoom + fade) */}
//             {showLogo && (
//                 <motion.img
//                     src="/Slora_logo.png"
//                     alt="Logo"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1.5, ease: "easeOut" }}
//                     className="absolute w-24 h-24"
//                 />
//             )}

//             {/* Blue Bar + Typing Text */}
//             {showBar && (
//                 <div className="absolute bottom-1/3 flex items-center">
//                     <motion.div
//                         initial={{ width: "200px" }}
//                         animate={{ width: `${200 - typedText.length * 20}px` }}
//                         transition={{ duration: 0.3, ease: "linear" }}
//                         className="h-1 bg-blue-500"
//                     />
//                     <span className="ml-2 text-blue-400 font-bold text-lg">
//                         {typedText}
//                     </span>
//                 </div>
//             )}
//         </div>
//     );
// }


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FixedRowAnimation({ children }) {
    const [show, setShow] = useState([false, false, false]);
    const [done, setDone] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [showBar, setShowBar] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [finished, setFinished] = useState(false);

    const fullText = "Sloara.Ai";

    useEffect(() => {
        const timers = [];

        [0, 1, 2].forEach((i) => {
            const t = setTimeout(() => {
                setShow((prev) => {
                    const updated = [...prev];
                    updated[i] = true;
                    return updated;
                });

                if (i === 2) {
                    const logoTimer = setTimeout(() => setShowLogo(true), 2000);
                    timers.push(logoTimer);

                    const hideTimer = setTimeout(() => setDone(true), 2000);
                    timers.push(hideTimer);

                    const barTimer = setTimeout(() => setShowBar(true), 3500);
                    timers.push(barTimer);
                }
            }, i * 1500);
            timers.push(t);
        });

        return () => timers.forEach((t) => clearTimeout(t));
    }, []);

    // Typing effect for Sloara.Ai
    useEffect(() => {
        if (showBar) {
            let i = 0;
            const typing = setInterval(() => {
                if (i < fullText.length) {
                    setTypedText((prev) => prev + fullText[i]);
                    i++;
                } else {
                    clearInterval(typing);
                    setTimeout(() => setFinished(true), 1500);
                }
            }, 300);
            return () => clearInterval(typing);
        }
    }, [showBar]);

    if (finished) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
            <AnimatePresence>
                {!done && (
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-white text-3xl font-bold flex space-x-8"
                    >
                        <span className="w-40 flex justify-center">
                            {show[0] && (
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Innovative
                                </motion.span>
                            )}
                        </span>

                        <span className="w-40 flex justify-center">
                            {show[1] && (
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Imaginative
                                </motion.span>
                            )}
                        </span>

                        <span className="w-40 flex justify-center">
                            {show[2] && (
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Inspirational
                                </motion.span>
                            )}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Logo Animation (center slide + fade + zoom) */}
            {showLogo && (
                <motion.img
                    src="/Slora_logo.png"
                    alt="Logo"
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute w-24 h-24"
                />
            )}

            {/* Blue Bar + Typing Text */}
            {showBar && (
                <div className="absolute bottom-1/3 flex items-center">
                    <motion.div
                        initial={{ width: "200px" }}
                        animate={{ width: `${200 - typedText.length * 20}px` }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className="h-1 bg-blue-500"
                    />
                    <span className="ml-2 text-blue-400 font-bold text-lg">
                        {typedText}
                    </span>
                </div>
            )}
        </div>
    );
}
