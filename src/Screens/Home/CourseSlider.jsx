import { motion } from "framer-motion";
import mba from "../../assets/hero/mba.webp"
import bvoc from "../../assets/hero/bvoc.webp"
import digi from "../../assets/hero/digital-marketing.webp"
import nursing from "../../assets/hero/Nursing.webp"


const CourseSlider = () => {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="w-[90%] max-w-7xl flex flex-col items-center justify-between gap-10 font-Jakarta">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="relative w-full overflow-hidden shadow-xl group rounded-2xl border-2 p-4 md:p-8 flex flex-col md:flex-row align-middle justify-center"
                >
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden h-[220px] md:h-[400px]">
                        <img src={digi} alt="" className="object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 py-4 md:p-8">
                        <p className="font-bold text-2xl">Digital Marketing</p>
                        <hr className="my-4 border border-[#6e6e6e]" />
                        <p className="text-[16px] md:text-[18px] text-text leading-relaxed">Benchmark Education offers a comprehensive digital marketing course designed to build practical skills in SEO training, social media strategy, and online advertising. The program focuses on real-world projects and modern marketing tools to prepare learners for careers in the growing digital marketing industry. Gain industry knowledge, hands-on experience, and the confidence needed to succeed in today’s competitive digital landscape.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="relative w-full overflow-hidden shadow-xl group rounded-2xl border-2 p-4 md:p-8 flex flex-col md:flex-row align-middle justify-center"
                >
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden h-[220px] md:h-[400px]">
                        <img src={bvoc} alt="" className="object-cover object-bottom" />
                    </div>
                    <div className="w-full md:w-1/2 py-4 md:p-8">
                        <p className="font-bold text-2xl">BVoc</p>
                        <hr className="my-4 border border-[#6e6e6e]" />
                        <p className="text-[16px] md:text-[18px] text-text leading-relaxed">Benchmark Education provides industry-focused BVoc course programs that combine academic learning with practical training. These skill-based degree programs help build strong professional capabilities for modern industries. With hands-on experience, industry exposure, and career-focused learning, the BVoc program prepares individuals for promising opportunities in diverse professional fields while supporting long-term career development and employability.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="relative w-full overflow-hidden shadow-xl group rounded-2xl border-2 p-4 md:p-8 flex flex-col md:flex-row align-middle justify-center"
                >
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden h-[220px] md:h-[400px]">
                        <img src={nursing} alt="" className="object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 py-4 md:p-8">
                        <p className="font-bold text-2xl">Nursing</p>
                        <hr className="my-4 border border-[#6e6e6e]" />
                        <p className="text-[16px] md:text-[18px] text-text leading-relaxed">The nursing course at Benchmark Education is designed to build essential healthcare knowledge and practical clinical skills. This healthcare training program focuses on patient care, medical fundamentals, and real-world experience to prepare future healthcare professionals. With industry-relevant learning and professional guidance, the program supports career growth in the expanding healthcare industry and global medical services.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="relative w-full overflow-hidden shadow-xl group rounded-2xl border-2 p-4 md:p-8 flex flex-col md:flex-row align-middle justify-center"
                >
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden h-[220px] md:h-[400px]">
                        <img src={mba} alt="" className="object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 py-4 md:p-8">
                        <p className="font-bold text-2xl">MBA</p>
                        <hr className="my-4 border border-[#6e6e6e]" />
                        <p className="text-[16px] md:text-[18px] text-text leading-relaxed">Benchmark Education supports access to leading MBA programs abroad designed for future business leaders. These international MBA programs provide global exposure, strategic management knowledge, and leadership development. With expert academic guidance and university partnerships, the program prepares professionals to succeed in competitive global markets and advance their careers in modern business management.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CourseSlider;