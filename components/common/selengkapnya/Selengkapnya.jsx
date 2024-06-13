import Image from "next/image";
import Subtract from "../../../assets/icons/subtract.svg";
import Link from "next/link";

function Selengkapnya({ isPasien }) {
  return (
    <Link href={"/tematik-maps"}>
      <div
        className={`flex bg-white rounded-xl border border-[#E5E5E5] px-4 max-w-[384px] ${
          isPasien ? "mt-5 py-3" : "py-5"
        } items-center cursor-pointer`}
      >
        <Image src={Subtract} alt="subtract" className="mr-3" />
        <div className="flex flex-col mr-2">
          <span className="font-bold text-base text-[#424242]">
            Selengkapnya
          </span>
          <span className="font-normal text-[10px] text-[#616161]">
            Akses peta tematik persebaran dari fasilitas kesehatan yang menjadi
            partner kami
          </span>
        </div>
        <div className="relative w-8 h-5">
          <div className="absolute bg-[#424242] w-5 h-5 rotate-45"></div>
          <div className="absolute bg-white w-5  h-5 rotate-45 -translate-x-1"></div>
        </div>
      </div>
    </Link>
  );
}

export default Selengkapnya;
