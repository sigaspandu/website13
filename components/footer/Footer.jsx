import { Styles } from "./Styles";

function Footer() {
  return (
    <footer className="w-full" style={Styles.mainWrapper}>
      <section className="w-full pt-24 px-32 pb-8 flex justify-between">
        <div className="">
          <span className="font-bold text-base">Site Map</span>
          <div className="flex gap-10 mt-[6px]">
            <div className="flex flex-col gap-[6px]">
              <span className="cursor-pointer">FAQ</span>
              <span className="cursor-pointer">Blog</span>
              <span className="cursor-pointer">Syarat & Ketentuan</span>
              <span className="cursor-pointer">Kebijakan Privacy</span>
              <span className="cursor-pointer">Promo</span>
            </div>
            <div className="flex flex-col gap-[6px]">
              <span className="cursor-pointer">Karir</span>
              <span className="cursor-pointer">Security</span>
              <span className="cursor-pointer">Media</span>
              <span className="cursor-pointer">Corporate Partnership</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-base">
            Layanan Pengaduan Konsumen
          </span>
          <span className="flex flex-col">
            <span className="font-bold">PT SiGasPandu Indonesia</span>
            <span className="">
            Kampus ITS Keputih, Sukolilo, Surabayaa 60111, Jawa Timur
            </span>
            <span className="">kemkersigaspandu13@gmail.com / 031-5939-693</span>
          </span>
          <span className="flex flex-col">
            <span>
              Sistem Informasi Geospasial untuk Pelayanan Kesehatan Terpadu
            </span>
            <span>SiGasPandu</span>
            <span>0853 1111 1010 (WhatsApp)</span>
          </span>
        </div>
        <div className="">
          <span className="font-bold text-base">
            Our Team
          </span>
        </div>
      </section>
      <section className="w-full px-32 bg-[#35406B] py-5 flex justify-between items-center">
        <span className="text-white text-lg font-medium">
          Ⓒ SiGasPandu, 2024. ALL RIGHT RESERVED
        </span>
        <span className="text-white text-lg font-medium">Follow kami di: </span>
        <span className="">
        @gas.sigaspandu13
        </span>
      </section>
    </footer>
  );
}

export default Footer;
