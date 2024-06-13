"use client";
import Map from "@/components/common/maps/Map";
import FaskesList from "@/components/faskes/FaskesList";
import useGetFaskesHooks from "@/hooks/useGetFaskes.hook";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Faskes() {
  const { faskes, getFaskes, allFaskes, searchFaskes } = useGetFaskesHooks();
  const router = useRouter();

  function redirectToFaskesDetail (id) {
    router.push(`/faskes/detail/${id}`);
  }

  useEffect(() => {
    getFaskes();
  }, []);
  return (
    <main
      className="flex flex-col px-[5%] py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(143.74deg, #FFFFFF 0.68%, #F8BEC2 138.44%)",
      }}
    >
      <Map faskes={allFaskes} />
      <section className="flex flex-col mt-11 gap-16 items-center">
        <div className="px-[18px] py-3 border-[3px] border-[#F17C84] h-[79px] w-[1163px] rounded-full flex gap-8 text-black bg-white">
          <div
            className="h-full aspect-square rounded-full"
            style={{
              background: "linear-gradient(180deg, #F10046 0%, #E76C7D 100%)",
            }}
          ></div>
          <input
            type="text"
            name="search"
            placeholder="Cari Rumah Sakit di Sekitar Anda"
            className="focus:outline-none w-full"
            onChange={(e) => searchFaskes(e.target.value)}
          />
        </div>
        <FaskesList faskes={faskes} redirectToFaskesDetail={redirectToFaskesDetail} />
      </section>
    </main>
  );
}
