import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { AnimatePresence, motion } from "framer-motion";
import { MinusCircleIcon,MinusIcon,PlusCircleIcon, PlusIcon } from "@heroicons/react/24/solid";

const AccordionItem = ({ item, onClick }) => {
  return (
    <motion.div initial={{opacity:0,translateY:150}} whileInView={{opacity:1,translateY:0}} viewport={{once:false}} transition={{ease:'easeInOut',duration:0.8}}>
      <button
        className="w-full text-left font-Jakarta h-20 p-4 focus:outline-none bg-white border rounded-lg shadow-md flex justify-between items-center my-4 font-medium relative before:absolute before:h-[40px] before:w-[70px] before:bg-background before:-right-2 before:-rotate-[45deg] overflow-hidden before:top-2 before:rounded-full z-0"
        onClick={() => onClick(item.id)}
      >
        {item.question}
       
        {item.open ?  <button className="h-[25px] w-[25px] rounded-full bg-white shadow-lg z-10 mr-2"> <MinusIcon className="h-6 w-6 z-10  fill-black  rounded-full "/>  </button>: <button className="h-[25px] w-[25px] shadow-lg rounded-full bg-white z-10 mr-2"> <PlusIcon className="h-6 w-6 z-10  fill-black  rounded-full"/></button>}
        
       
      </button>
      <AnimatePresence>
        {item.open && (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 ml-4"
          >
            <p className="text-text text-[18px] font-Jakarta">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionItem;
