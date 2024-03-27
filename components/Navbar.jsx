import Link from "next/link";
import Image from "next/image";
import ShoeBrand from "@/public/assets/ShoeBrand.png";
import Group from "@/public/assets/Group.png";
import Vector from "@/public/assets/Vector.png";

function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between py-3 px-6  relative ">
      <div>
        <Image src={ShoeBrand}></Image>
      </div>

      <div>
        {/* Desktop Nav Links */}

        <div className="hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Sneakers</Link>
          <Link href={"/"}>Players</Link>
        </div>

        {/* Mobile Nav Links */}

        <Image src={Group} className="w-8 cursor-pointer sm:hidden"></Image>

        <div className="flex flex-col space-y-5 shadow-md p-10 absolute right-0 top-0 z-10 hidden">
          <Image
            src={Vector}
            className="w-6 cursor-pointer absolute top-2 right-5"
          ></Image>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Sneakers</Link>
          <Link href={"/"}>Players</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
