import { color, easeOut, motion } from "framer-motion";
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={banner1}
            animate={{y:[50,100,50]}}
            transition={{duration: 10,repeat:Infinity}}
            className="max-w-sm w-64 rounded-t-[40px]  rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400"
          />
          <motion.img
            src={banner2}
            animate={{x:[100,150,100]}}
            transition={{duration: 10,delay: 5,repeat:Infinity}}
            className="max-w-sm w-64 rounded-t-[40px]  rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{x:50}}
            transition={{duration: 2, delay: 1, ease: easeOut,repeat: Infinity}}
            className="text-5xl font-bold">Latest <motion.span
            animate={{color: ['#ecff33','#33ffe3','#ff6133']}}
            transition={{duration: 1.5, repeat: Infinity}}
            >Jobs</motion.span> For You!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;