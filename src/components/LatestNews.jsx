import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

const LatestNews = () => {
  return (
    <div className="flex gap-3 items-center bg-base-200 p-4">
      <p className="bg-[#D72050] py-2 px-5 text-xl font-medium text-white">Latest</p>
  
  <Marquee pauseOnHover={true} className="font-semibold text-[#403F3F]">
        <Link className="inline-block mx-5" to='/news'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Link>
        <Link className="inline-block mx-5"  to='/news'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Link>
        <Link className="inline-block mx-5" to='/news'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Link>
     </Marquee>
  </div>
  )
}

export default LatestNews
