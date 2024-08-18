import Link from "next/link"
import MobileMenu from "@/components/MobileMenu"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%] text-sm">
        <Link href="/" className="font-bold text-xl text-blue-600">MEMORIA</Link>
      </div>
      <div className="hidden md:flex w-[50%]">
        <div className="flex gap-6 text-gray-600 mr-4">  
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.png" alt="home" width={16} height={16} className="w-4 h-4" />
            <span>Homepage</span>
          </Link>
        </div>
        <div className="flex gap-6 text-gray-600 mr-4">  
          <Link href="/" className="flex items-center gap-2">
            <Image src="/friends.png" alt="home" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>
        </div>
        <div className="flex gap-6 text-gray-600 mr-4">  
          <Link href="/" className="flex items-center gap-2">
            <Image src="/stories.png" alt="home" width={16} height={16} className="w-4 h-4"/>
            <span>Stories</span>
          </Link>
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar