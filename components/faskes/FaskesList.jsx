import Image from "next/image";
import Link from "next/link";

export default function FaskesList({ faskes, redirectToFaskesDetail }) {
  return (
    <div className="flex gap-12 w-full overflow-x-auto hide-scrollbar">
      {faskes?.map((item) => (
        <Link href={`/faskes/${item.id}`} className="flex flex-col items-start">
          <div className="w-[335px] h-[502px] rounded-[54px] bg-gray-400 mb-4 relative overflow-hidden">
            <Image
              src={item.image ?? "https://picsum.photos/200/300"}
              alt={item.name}
              layout="fill"
              className="w-full h-full"
            />
          </div>
          <span className="font-bold text-2xl text-[#333] capitalize">
            {item.name}
          </span>
          <p className="font-normal text-sm text-[#666]">{item.address}</p>
        </Link>
      ))}
    </div>
  );
}
