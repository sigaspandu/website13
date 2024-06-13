"use client";
import Map from "@/components/common/maps/Map";
import { Suspense, useEffect } from "react";
import UserShippingCard from "@/components/common/UserShippingCard/UserShippingCard";
import Image from "next/image";
import { useOrder } from "@/hooks/useOrder.hook";
import { useSearchParams } from "next/navigation";
import Button from "@/components/common/Button/Button";

function ShippingMapsPage() {
  const { acceptOrder, order, getOrderById } = useOrder();
  const params = useSearchParams();

  useEffect(() => {
    if (params.has("id")) {
      getOrderById(params.get("id"));
    }
  }, []);
  return (
    <main
      className="flex flex-col px-[5%] py-16 overflow-hidden justify-center items-center"
      style={{
        background:
          "linear-gradient(143.74deg, #FFFFFF 0.68%, #F8BEC2 138.44%)",
      }}
    >
      <div className="w-full items-center flex flex-col">
        <Map faskes={order ? [order?.user] : []} />
        <div className="bg-[#35406B] -mt-11 z-10 text-white w-max font-bold text-2xl rounded-full py-6 px-12">
          LOKASI PASIEN
        </div>
      </div>
      <UserShippingCard order={order} hideButton />
      <Button
        onClick={() => acceptOrder(params.get("id"))}
        className="bg-[#35406B] mt-14 text-white w-max font-bold text-2xl rounded-full py-6 px-12 flex items-center gap-6"
      >
        <Image src="/images/car.svg" alt="car" width={131} height={49} />
        <p className="text-4xl font-semibold text-nowrap">Jemput Pasien</p>
      </Button>
    </main>
  );
}

const ShippingMapsPageSuspense = () => (
  <Suspense
    fallback={
      <div className="w-full h-full flex justify-center items-center">
        Loading...
      </div>
    }
  >
    <ShippingMapsPage />
  </Suspense>
);

export default ShippingMapsPageSuspense;
