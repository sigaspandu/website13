"use client";
import Button from "@/components/common/Button/Button";
import { useAuthContext } from "@/context/authContext";
import useGetFaskesHooks from "@/hooks/useGetFaskes.hook";
import { Info, Clock4 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function FaskesDetailPage({ params }) {
  const { isLogin } = useAuthContext();
  const { oneFaskes, getFaskesById } = useGetFaskesHooks();
  const [activeBtn, setActiveBtn] = useState(1);

  function requestJemput() {
    if (!isLogin) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda harus login terlebih dahulu!",
      });
      return;
    }
    window.location.href = `/shipping?time=${
      activeBtn === 1 ? "1" : "2"
    }&faskes=${params.id}`;
  }

  useEffect(() => {
    getFaskesById(params.id);
  }, []);
  return (
    <main
      className="flex flex-col px-[5%] py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(143.74deg, #FFFFFF 0.68%, #F8BEC2 138.44%)",
      }}
    >
      <div className="flex gap-12">
        <div className="w-1/2 aspect-[3/2] bg-gray-500 rounded-[54px] overflow-hidden relative">
          <Image
            src={oneFaskes?.image}
            alt={oneFaskes?.name}
            layout="fill"
            objectFit="fill"
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2 pt-5">
          <h1 className="text-[#333] text-5xl font-semibold mb-4">
            {oneFaskes?.name?.toUpperCase()}
          </h1>
          <p className="text-[#666] text-2xl">{oneFaskes?.address}</p>=
          <Button
            onClick={requestJemput}
            className="py-10 px-10 mt-14 gap-4 rounded-[55px] w-full"
          >
            <Image src="/images/car.svg" alt="car" width={131} height={49} />
            <p className="text-4xl font-semibold text-nowrap">
              Layanan antar jemput
            </p>
          </Button>
        </div>
      </div>
      <div className="flex mt-24">
        <div className="w-1/3">
          <div className="flex gap-4 items-start">
            <Info className="text-[#333]" width={90} />
            <div>
              <h2 className="text-[#333] text-xl mb-4 font-semibold">
                Tentang
              </h2>
              <p className="text-black text-lg">
                {oneFaskes?.description ??
                  `Rumah Sakit UBAYA adalah Rumah Sakit yang terletak di Tenggilis
                Mejoyo, Surabaya yang berada di bawah naungan Universitas
                Surabaya Group. RS UBAYA memiliki Visi Menjadikan RS Ubaya
                sebagai The First Hospital in Heart and Mind dalam aspek
                pelayanan, pendidikan dan penelitian.`}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start mt-8">
            <Clock4 className="text-[#333]" />
            <div>
              <h2 className="text-[#333] text-xl mb-8 font-semibold">
                Pilih Jadwal Penjemputan
              </h2>
              <Button
                className="py-4 px-14 text-nowrap border-[3px] text-4xl font-bold mb-6"
                outlined={activeBtn !== 1}
                onClick={() => setActiveBtn(1)}
              >
                07.00 - 13.00 WIB
              </Button>
              <Button
                className="py-4 text-nowrap px-14 border-[3px]  text-4xl font-bold rounded-full flex"
                outlined={activeBtn !== 2}
                onClick={() => setActiveBtn(2)}
              >
                17.00 - 20.00 WIB
              </Button>
            </div>
          </div>
        </div>
        <div className="w-2/3 pl-24">
          <h2 className="text-[#333] text-2xl font-semibold">
            Dokter yang tersedia
          </h2>
          <div className="flex flex-wrap gap-4 mt-8">
            {oneFaskes?.available_doctor?.map((specialist) => (
              <div
                key={specialist}
                className="flex flex-col w-44 items-center justify-start gap-4"
              >
                <Image
                  src={`/images/specialist/${specialist
                    .split(" ")
                    .join("_")}.svg`}
                  alt={specialist}
                  width={105}
                  height={105}
                  className="bg-gray-500 rounded-full"
                />
                <p className="text-[#333] text-2xl text-center">
                  {specialist?.length > 18
                    ? `${specialist.slice(0, 18)}...`
                    : specialist}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
