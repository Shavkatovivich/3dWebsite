import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => 
function HOC () {
    return (
        <motion.section
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount: 0.25}}
        >
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper;