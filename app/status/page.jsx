"use client";
import Image from "next/image";
import Curved from "@/assets/backgrounds/curve-red.svg";
import { Phone } from "lucide-react";
import { useAuthContext } from "@/context/authContext";
import { useEffect } from "react";

export default function StatusPage() {
  const { orderStatus } = useAuthContext();

  useEffect(() => {
    if (orderStatus === false) {
      window.location.href = "/";
    }
  }, [orderStatus]);
  return (
    <main
      className="flex relative min-h-[93vh] flex-col px-[5%] py-16 overflow-hidden justify-center items-center"
      style={{
        background:
          "linear-gradient(143.74deg, #FFFFFF 0.68%, #F8BEC2 138.44%)",
      }}
    >
      <section className="text-[#EB1C25] z-50 flex justify-between w-full h-full">
        <div>
          {orderStatus?.status === "accepted" ? (
            <h1
              className="text-[98px] font-extrabold"
              style={{ lineHeight: 1.1 }}
            >
              <div>Faskes Sedang</div>
              <div>Menuju</div>
              <div>Rumah Anda</div>
            </h1>
          ) : (
            <h1
              className="text-[98px] font-extrabold w-[60%]"
              style={{ lineHeight: 1.1 }}
            >
              Faskes Akan Memproses Permintaan Anda
            </h1>
          )}
          <div className="text-2xl my-8">
            <p>
              Hubungi nomor Faskes dibawah ini jika dalam{" "}
              {orderStatus?.status === "accepted"
                ? "60 menit"
                : "15 menit belum"}
            </p>
            <p>
              {orderStatus?.status === "accepted"
                ? "faskes belum tiba di rumah anda"
                : "ada konfirmasi dari pihak faskes"}
            </p>
          </div>
          <div className="flex gap-6 font-semibold">
            <Phone size={35} />
            <p className="text-2xl">{orderStatus?.phoneNumber}</p>
          </div>
        </div>
        <Image
          className="absolute bottom-0 right-0 w-[70vw] -z-10"
          src={Curved}
        />
        <Image
          src={
            orderStatus?.status === "accepted"
              ? "/images/docter-man.png"
              : "/images/docter-woman.png"
          }
          alt="docter"
          width={600}
          height={600}
          className="absolute bottom-0 right-20"
        />
      </section>
    </main>
  );
}
