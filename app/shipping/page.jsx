"use client";
import Button from "@/components/common/Button/Button";
import Map from "@/components/common/maps/Map";
import { useAuthContext } from "@/context/authContext";
import { useOrder } from "@/hooks/useOrder.hook";
import { Clock4, HomeIcon, Phone } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function ShippingPage() {
  const { user } = useAuthContext();
  const { createOrder } = useOrder();
  const [activeBtn, setActiveBtn] = useState(1);

  const query = useSearchParams();
  const morning = query.get("time") === "1";
  const faskes = query.get("faskes");
  const times = {
    1: morning ? "07:00" : "17:00",
    2: morning ? "09:00" : "18:00",
    3: morning ? "11:00" : "19:00",
    4: morning ? "13:00" : "21:00",
  };

  async function submitOrder() {
    const success = await createOrder({
      userId: user?.id,
      faskesId: faskes,
      time: times[activeBtn],
    });

    if (success) {
      window.location.href = "/status";
    }
  }

  return (
    <main
      className="flex flex-col px-[5%] py-16 overflow-hidden justify-center items-center"
      style={{
        background:
          "linear-gradient(143.74deg, #FFFFFF 0.68%, #F8BEC2 138.44%)",
      }}
    >
      <Map faskes={user ? [user] : []} />
      <div className="flex justify-center items-center mt-12 mb-6">
        <div className="border-[3px] border-[#F17C84] py-12 px-16 rounded-[100px] flex flex-col gap-6 bg-white w-[80vw]">
          <div className="flex gap-8 items-center">
            <HomeIcon className="text-[#333] h-24 font-medium" size={60} />
            <div>
              <p className="text-[#666] text-2xl mb-2">Alamat Pemjemputan</p>
              <p className="text-4xl text-[#333] capitalize">
                {user ? user.address : "Pilih Alamat Pemjemputan"}
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <Phone className="text-[#333] h-24 font-medium" size={60} />
            <div>
              <p className="text-[#666] text-2xl mb-2">No Telepon</p>
              <p className="text-4xl text-[#333]">
                {user?.phone ? user.phone : "-"}
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <Clock4 className="text-[#333] h-24 font-medium" size={60} />
            <div>
              <p className="text-[#666] text-2xl mb-2">Pilih Jam Penjemputan</p>
              <div className="flex gap-4">
                <Button
                  className="border-[3px] flex items-center cursor-pointer text-2xl w-max font-bold px-6 py-2"
                  outlined={activeBtn !== 1}
                  onClick={() => setActiveBtn(1)}
                >
                  {times[1]} WIB
                </Button>
                <Button
                  className="border-[3px] flex items-center cursor-pointer text-2xl w-max font-bold px-6 py-2"
                  outlined={activeBtn !== 2}
                  onClick={() => setActiveBtn(2)}
                >
                  {times[2]} WIB
                </Button>
                <Button
                  className="border-[3px] flex items-center cursor-pointer text-2xl w-max font-bold px-6 py-2"
                  outlined={activeBtn !== 3}
                  onClick={() => setActiveBtn(3)}
                >
                  {times[3]} WIB
                </Button>
                <Button
                  className="border-[3px] flex items-center cursor-pointer text-2xl w-max font-bold px-6 py-2"
                  outlined={activeBtn !== 4}
                  onClick={() => setActiveBtn(4)}
                >
                  {times[4]} WIB
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={submitOrder}
        className="bg-[#35406B] text-white w-max font-bold text-2xl rounded-full py-6 px-8"
      >
        Konfirmasi Penjemputan
      </button>
    </main>
  );
}

const ShippingPageSuspense = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          Loading...
        </div>
      }
    >
      <ShippingPage />
    </Suspense>
  );
};

export default ShippingPageSuspense;
