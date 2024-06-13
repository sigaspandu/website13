"use client";;
import Image from "next/image";
import Curved from "@/assets/backgrounds/curve-red.svg";
import Button from "@/components/common/Button/Button";
import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "@/context/authContext";
export default function LoginPage() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [isPasien, setIsPasien] = useState(null);

  const { isLogin, user, login } = useAuthContext();

  function submitLogin(e) {
    e.preventDefault();
    const userName = usernameRef.current.value;
    const password = passwordRef.current.value;
    login(userName, password, isPasien ? "pasien" : "faskes");
  }

  useEffect(() => {
    if (isLogin) {
      window.location.href = "/";
    }
  }, [isLogin, user]);

  return (
    <main
      className="flex relative min-h-[93vh] flex-col px-[5%] py-16 overflow-hidden justify-center items-center"
      style={{
        background:
          "linear-gradient(143.74deg, #FFFFFF 0.68%, #F8BEC2 138.44%)",
      }}
    >
      {isPasien !== null ? (
        <section className="text-[#EB1C25] flex justify-between w-full h-full">
          <div>
            <h1 className="text-[133px] font-extrabold">Login</h1>
            <p className="text-2xl">Selamat datang di SigasPandu</p>
            <p className="text-2xl">
              {isPasien
                ? "Login dan dapatkan pelayanan kesehatan terbaik"
                : "Login dan siap berkontribusi bersama kami"}
            </p>
            <div className="flex flex-col max-w-[453px] justify-center items-center">
              <div className="px-[18px] mt-16 py-3 border-[3px] border-[#F17C84] w-full rounded-full flex gap-4 text-[#F17C84] bg-white">
                <Image
                  src="/images/user-icon.png"
                  alt="user icon"
                  width={87}
                  height={87}
                />
                <input
                  ref={usernameRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="focus:outline-none w-full text-3xl placeholder-[#F17C84]"
                  autoComplete="off"
                />
              </div>
              <div className="px-[18px] mt-7 py-3 border-[3px] border-[#F17C84] w-full rounded-full flex gap-4 text-[#F17C84] bg-white">
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="focus:outline-none w-full text-3xl placeholder-[#F17C84]"
                  autoComplete="off"
                />
                <Image
                  src="/images/password.png"
                  alt="user icon"
                  width={87}
                  height={87}
                />
              </div>
              <Button
                onClick={submitLogin}
                className="py-4 px-20 mt-11 gap-4 rounded-[55px] w-max text-white text-[39px] font-semibold text-nowrap"
              >
                Login
              </Button>
              {!isPasien ? <p className="mt-2">As Faskes</p> : null}
            </div>
          </div>
          <Image className="absolute bottom-0 right-0 w-[60vw]" src={Curved} />
          <Image
            src={isPasien ? "/images/pasien.png" : "/images/suster-woman.png"}
            alt="docter"
            width={700}
            height={700}
            className="absolute bottom-0 right-20"
          />
        </section>
      ) : (
        <section className="text-[#EB1C25] flex flex-col justify-center w-full h-full m-auto">
          <h1 className="text-[133px] font-extrabold m-auto">
            Siapakah Anda ?
          </h1>
          <div className="flex gap-4 m-auto">
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[350px] relative flex-col justify-center bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src="/images/suster-woman.png"
                  alt="pasien"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <Button
                className="py-4 px-20 mt-7 gap-4 rounded-[55px] w-max text-white text-[39px] font-semibold text-nowrap"
                onClick={() => setIsPasien(false)}
              >
                Faskes
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[350px] relative flex-col justify-center bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src="/images/pasien.png"
                  alt="pasien"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <Button
                className="py-4 px-20 mt-7 gap-4 rounded-[55px] w-max text-white text-[39px] font-semibold text-nowrap"
                onClick={() => setIsPasien(true)}
              >
                Pasien
              </Button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
