"use client";
import Button from "@/components/common/Button/Button";
import { Clock4, Phone } from "lucide-react";
import Image from "next/image";
import People from "@/assets/icons/people.svg";

export default function UserShippingCard({ order, onClick, hideButton }) {
  return (
    <div className="mt-20 w-full flex flex-col">
      <Button className="py-4 w-max px-8 text-nowrap text-2xl font-bold uppercase">
        {order?.user?.type?.toUpperCase()}
      </Button>
      <div className="border-[10px] text-[#EA323D] border-[#F17C84] rounded-full my-4 p-7 flex items-center gap-10">
        <div>
          <div className="rounded-full w-[253px] h-[253px] overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={People}
              alt="user"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex pr-8 flex-col space-y-4 w-max">
          {order?.user?.["phone number"] && (
            <div className="flex gap-2 items-center">
              <Phone size={35} />
              <p className="text-2xl font-medium">
                {order?.user?.["phone number"]}
              </p>
            </div>
          )}
          <h2 className="text-5xl font-bold capitalize">{order?.user?.name}</h2>
          <p className="text-3xl max-w-[90%] capitalize">
            {order?.user?.address}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button className="py-4 gap-4 flex self-end px-8 text-nowrap text-2xl font-bold">
          <Clock4 />
          <p>Jam Penjemputan {order?.time} WIB</p>
        </Button>
        {!hideButton &&
          (order?.status !== "done" ? (
            order?.status === "pending" ? (
              <Button
                onClick={() => onClick(order?.id)}
                className="py-4 gap-4 flex self-end px-8 text-nowrap text-2xl font-bold"
              >
                <p>Jemput pasien</p>
              </Button>
            ) : (
              <Button
                onClick={() => onClick(order?.id)}
                className="py-4 gap-4 flex self-end px-8 text-nowrap text-2xl font-bold"
              >
                <p>Selesaikan Pesanan</p>
              </Button>
            )
          ) : (
            <Button className="py-4 gap-4 flex self-end px-8 text-nowrap text-2xl font-bold">
              <p>Pesananan Selesai</p>
            </Button>
          ))}
      </div>
    </div>
  );
}
