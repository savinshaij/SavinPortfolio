import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from './anim';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Nav() {
  return (
    <div className="flex flex-col justify-between h-full p-[100px_40px_50px_40px] box-border">
      {/* Body Section */}
      <div className="flex flex-col gap-2.5">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="[perspective:120px] [perspective-origin:bottom]">
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <AnchorLink href={href} className="text-black text-[46px] no-underline">
                  {title}
                </AnchorLink>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Footer Section */}
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              href={href}
              key={`f_${i}`}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              className="w-1/2 mt-1.5"
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
