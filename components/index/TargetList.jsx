import Image from "next/image";
import Disabilitas from "@/assets/images/index/disabilitas.svg";
import IbuHamil from "@/assets/images/index/ibu-hamil.svg";
import KurangMampu from "@/assets/images/index/kurang-mampu.svg";
import Lansia from "@/assets/images/index/lansia.svg";

function TargetList() {
  const targetList = [
    {
      image: Disabilitas,
      title: "Disabilitas",
    },
    {
      image: IbuHamil,
      title: "Ibu Hamil",
    },
    {
      image: KurangMampu,
      title: "Kurang Mampu",
    },
    {
      image: Lansia,
      title: "Lansia",
    },
  ];
  return (
    <div className="mt-5 flex gap-8">
      {targetList.map((item) => (
        <div className="flex flex-col items-center">
          <Image
            src={item.image}
            alt={item.title}
            className="rounded-[42px] w-[259px] h-[388px] mb-4"
          />
          <span className="font-bold text-base text-[#333]">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default TargetList;
