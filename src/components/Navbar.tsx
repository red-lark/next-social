import Link from "next/link"
import MobileMenu from "@/components/MobileMenu"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="">
        <Link href="/" className="font-bold text-xl text-blue-600">LamaSocial</Link>
      </div>
      <div className="hidden">Navbar</div>
      <div className="">
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar