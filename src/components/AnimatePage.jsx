import { motion } from "framer-motion";
import PropTypes from "prop-types";

AnimatePage.propTypes = {
  children: PropTypes.element,
};

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function AnimatePage({ children }) {
  return (
    <motion.div variants={animations} initial='initial' animate='animate' exit='exit' transition={{ duration: 1.5 }}>
      {children}
    </motion.div>
  );
}
