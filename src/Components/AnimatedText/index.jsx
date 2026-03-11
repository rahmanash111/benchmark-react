// import React from 'react'
// import { motion } from "framer-motion";

// const AnimatedText = ({text}) => {

//     const splitText = (text)=>{
//         return text.split("").map((word)=>[...word,"\u00A0"]);
//     }


// // Animation variants
// const letterVariant = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
  
//   const wordVariant = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };
  
  


//     const words = splitText(text);
//   return (
//     <motion.div initial="hidden" animate="visible" variants={wordVariant} style={{
//         display:"flex",flexWrap:'wrap'
//     }} className='font-Jakarta text-[35px] md:text-[45px] text-center lg:text-left xl:text-left md:text-left xl:text-[72px] lg:text-[72px] leading-snug font-bold w-[60%]'>
//      {words.map((word, index) => (
//         <motion.span
//           key={index}
//           style={{ display: "inline-block", whiteSpace: "pre" }}
//           variants={wordVariant}
//         >
//           {word.map((letter, i) => (
//             <motion.span key={i} variants={letterVariant}>
//               {letter}
//             </motion.span>
//           ))}
//         </motion.span>
//       ))}
//     </motion.div>
//   )
// }

// export default AnimatedText