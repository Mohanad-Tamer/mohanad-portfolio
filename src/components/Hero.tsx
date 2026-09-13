import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="feed-container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-top"
        >
          <div className="hero-status">
            <span className="live-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <span className="hero-year">2026 / DEVELOPER PORTFOLIO</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-main"
        >
          <div>
            <p className="eyebrow">COMPUTER SCIENCE & AI</p>

            <h1>
              Mohanad
              <br />
              <span>Tamer</span>
              <b>.</b>
            </h1>
          </div>

          <div className="hero-intro">
            <p className="hero-role">
              Computer Science student building
              <strong> software systems</strong> and
              <strong> data-driven solutions.</strong>
            </p>

            <p className="hero-small">
              Software Development · Data Engineering · Business Intelligence
            </p>

            <a href="#work" className="hero-link">
              Explore my work
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-bottom"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;