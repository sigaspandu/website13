"use client";
import { Styles } from "./Styles";
import Icon from "../../assets/icons/main.svg";
import People from "../../assets/icons/people.svg";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "@/context/authContext";

function Navbar() {
  const { isLogin, user } = useAuthContext();
  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <nav
      className="flex w-full h-[57px] px-5 justify-between items-center"
      style={Styles.mainWrapper}
    >
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src={Icon}
            alt="udin"
            width={30}
            height={37}
            className="cursor-pointer"
          />
        </Link>
        <Link href={"/"}>
          <span className="ml-4 text-xl font-normal cursor-pointer">
            SiGasPandu
          </span>
        </Link>
        <Link href={"/"}>
          <span className="ml-20 text-base font-medium cursor-pointer">
            Beranda
          </span>
        </Link>
        <span className="ml-10 text-base font-medium cursor-pointer">
          Tentang Kami
        </span>
      </div>
      <div className="flex justify-end items-center">
        {isLogin ? (
          <>
            <div className="ml-10 text-base font-medium cursor-pointer">
              {user.name}
            </div>

            <Image
              src={People}
              alt="udin"
              width={40}
              height={40}
              className="cursor-pointer ml-4"
            />

            <div
              onClick={logout}
              className="ml-10 text-base font-medium cursor-pointer px-2 py-[6px] rounded-md bg-white"
            >
              <span className="text-pink-700 font-bold">Logout</span>
            </div>
          </>
        ) : (
          <Link href="/login">
            <div className="ml-10 text-base font-medium cursor-pointer px-2 py-[6px] rounded-md bg-white">
              <span className="text-pink-700 font-bold">Sign In</span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
