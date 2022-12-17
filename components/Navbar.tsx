'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="xPaddings py-8 relative"
  >
    <div className="absolute inset-0 gradient-01 w-1/2 "></div>

    <div className="innerWidth mx-auto flex justify-between items-center">
      <img src="search.svg" className="w-6 h-6 object-contain" alt="search" />

      <h2 className="uppercase text-white  text-2xl font-extrabold">
        metaversus
      </h2>

      <img src="menu.svg" className="w-6 h-6 object-contain" alt="menu" />
    </div>
  </motion.nav>
);

export default Navbar;
