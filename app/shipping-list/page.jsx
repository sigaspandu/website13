"use client";
import Button from "@/components/common/Button/Button";
import UserShippingCard from "@/components/common/UserShippingCard/UserShippingCard";
import { useAuthContext } from "@/context/authContext";
import { useOrder } from "@/hooks/useOrder.hook";
import Image from "next/image";
import { useEffect } from "react";

export default function ShippingListPage() {
  const { getOrders, orders, completeOrder } = useOrder();
  const { user, isLogin } = useAuthContext();

  function nagivageToDetailOrder(id) {
    window.location.href = `/shipping-maps?id=${id}`;
  }

  useEffect(() => {
    if (isLogin) {
      getOrders(user?.id);
    }
  }, [isLogin]);
  return (
    <main
      className="flex flex-col px-[5%] py-16 overflow-hidden justify-center items-center"
      style={{
        background:
          "linear-gradient(143.74deg, #FFFFFF 0.68%, #F8BEC2 138.44%)",
      }}
    >
      <Button className="py-10 px-10 gap-4 rounded-[55px] w-max">
        <Image src="/images/car.svg" alt="car" width={131} height={49} />
        <p className="text-4xl font-semibold text-nowrap">
          List Permintaan antar jemput
        </p>
      </Button>

      <div className="flex w-full flex-col space-y-10">
        {orders?.map((order) => (
          <UserShippingCard key={order.id} order={order} onClick={order?.status === "pending" ? nagivageToDetailOrder : completeOrder} />
        ))}
        {orders?.length === 0 && (
          <h1
            className="text-[98px] font-extrabold w-[60%] m-auto mt-20 text-center text-[#333]"
            style={{ lineHeight: 1.1 }}
          >
            Belum ada permintaan
          </h1>
        )}
      </div>
    </main>
  );
}
