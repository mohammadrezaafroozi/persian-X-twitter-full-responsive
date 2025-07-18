import Link from "next/link"
import Feed from "./components/feed"
import Share from "./components/share"

const Homepage = () => {
  return (
    <div className=''>
      <div className=" flex justify-between text-textGray font-bold border-b-[1px] border-textGray px-4 pt-4">
        <Link className="pb-3 flex items-center border-b-4 border-iconBlue " href=''>برای شما</Link>
        <Link className="pb-3 flex items-center  " href=''>دنبال شده</Link>
        <Link className="hidden pb-3 md:flex items-center  " href=''>Javascript</Link>
        <Link className="hidden pb-3 md:flex items-center  " href=''>React.js</Link>
        <Link className="hidden pb-3 md:flex items-center  " href=''>Next.js</Link>
      </div>

      <Share />
      <Feed />
    </div>
  )
}

export default Homepage