"use client";
import ItemCard from "@/components/common/itemCard/ItemCard";
import { Styles } from "@/components/index/Styles";
import { constant } from "@/components/index/constant";
import Selengkapnya from "@/components/common/selengkapnya/Selengkapnya";
import Image from "next/image";
import Curved from "@/assets/backgrounds/curve-red.svg";
import Wheelchair from "@/assets/images/wheelchair.svg";
import Workers from "@/assets/images/workers.svg";
import TargetList from "@/components/index/TargetList";
import { useAuthContext } from "@/context/authContext";
import Link from "next/link";

export default function Home() {
  const { isLogin, isPasien } = useAuthContext();
  function redirectToFaskes() {
    window.location.href = "/faskes";
  }
  return (
    <main className="flex flex-col bg-white">
      <section
        className="relative z-50 flex justify-between w-full px-[10%] pt-20 pb-24"
        style={Styles.mainWrapper}
      >
        <div>
          <h1 className="text-[32px] text-[#333] font-semibold">
            {isPasien
              ? "Solusi Kesehatan bagi Masyarakat Rentan dan Miskin"
              : "Partner Faskes untuk Terwujudnya Inklusivitas Layanan Kesehatan"}
          </h1>
          <span className="flex flex-col max-w-[787px] text-[#666] text-base mt-2">
            <span>
              {isPasien
                ? "Melayani antar jemput menuju fasilitas kesehatan bagi masyarakat rentan dan miskin demi"
                : "Menjadi partner dari fasilitas kesehatan untuk melayani antar jemput menuju fasilitas kesehatan bagi"}
            </span>
            <span>
              {isPasien
                ? "meningkatkan kualitas hidup bagi mereka yang membutuhkan."
                : "masyarakat rentan dan miskin demi meningkatkan kualitas hidup bagi mereka yang membutuhkan."}
            </span>
          </span>
          <div className="flex gap-5 mt-4 items-center">
            {isPasien ? (
              constant.layanan.map((item) => (
                <ItemCard
                  key={item.id}
                  title={item.title}
                  icon={item.icon}
                  onClick={redirectToFaskes}
                />
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="flex gap-3 items-center">
            {isLogin && !isPasien ? (
              <Link href={"/shipping-list"}>
                <div className="bg-white rounded-3xl border border-[#E5E5E5] px-6 py-6 items-center cursor-pointer">
                  <Image src={"/images/car-red.svg"} width={123} height={46} />
                </div>
              </Link>
            ) : (
              <></>
            )}
            <Selengkapnya isPasien={isPasien} />
          </div>
        </div>
        <Image
          className="text-black absolute bottom-[0] right-0"
          src={Curved}
        />

        {isPasien ? (
          <Image
            className="text-black absolute bottom-[-300px] right-[10%] p-20"
            src={Wheelchair}
          />
        ) : (
          <Image
            className="text-black absolute bottom-[-475px] right-[5%] p-20"
            src={"/images/docter-woman.png"}
            width={800}
            height={800}
          />
        )}
      </section>
      <section
        className="flex flex-col w-full px-[10%] pt-16 pb-24"
        style={Styles.secondaryWrapper}
      >
        <span className="text-4xl font-bold">Tentang Kami</span>
        <span className="text-lg max-w-[735px] text-justify">
          &ensp;&ensp;&ensp; SiGasPandu merupakan suatu inovasi yang menyatukan
          teknologi geospasial, website, dan layanan kesehatan lapangan dalam
          suatu platform terintegrasi. Dengan memanfaatkan data geospasial,
          SiGasPandu memungkinkan pengguna dari masyarakat miskin dan rentan
          untuk dengan mudah menemukan dan mengakses layanan kesehatan yang
          tersedia di sekitar mereka melalui layanan antar, jemput dan homecare,
          sehingga membantu meningkatkan aksesibilitas tanggap dan kualitas
          layanan kesehatan bagi masyarakat yang membutuhkan.
        </span>
      </section>
      <section className="flex flex-col gap-9 items-center w-full px-[10%] pt-6 pb-10">
        <div className="flex gap-11 border-[10px] rounded-full border-[#F17C84] w-[844px] pl-[28px] py-6 items-center">
          <Image src={Workers} alt="workers" className="rounded-full" />
          <span className="max-w-[491px] text-[#464646] text-lg text-justify">
            Melalui SiGasPandu masyarakat rentan dan miskin yang kesulitan pergi
            ke fasilitas kesehatan dapat menggunakan layanan antar jemput untuk
            sampai ke sana. Hal ini memastikan bahwa mereka tetap dapat
            mengakses layanan kesehatan dari fasilitas terdekat tanpa kesulitan
            transportasi.
          </span>
        </div>
        <div className="flex flex-col items-start w-full">
          <span className="text-4xl font-bold text-[#333333]">
            Tentang Kami
          </span>
          <p className="text-[#666666] text-sm">
            Masyarakat rentan dan miskin menjadi prioritas pelayanan kami
          </p>
          <TargetList />
        </div>
      </section>
    </main>
  );
}
