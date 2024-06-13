import Image from "next/image";

function ItemCard({ icon, title, ...rest }) {
  return (
    <div className="flex flex-col cursor-pointer bg-white rounded-3xl border border-[#E5E5E5] px-11 min-w-[180px] pt-6 pb-3 items-center" {...rest}>
      <Image src={icon} alt={title} className="mb-2" />
      <span className="font-bold text-base text-[#333]">{title}</span>
    </div>
  );
}

export default ItemCard;
