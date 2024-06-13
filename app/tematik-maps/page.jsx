"use client";
import Button from "@/components/common/Button/Button";
import { AlignJustify } from "lucide-react";
import Accordion from "../../components/common/Accordion/Accordion";
import Checkbox from "../../components/common/Checkbox/Checkbox";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TematikMapsPage() {
  const iframeRef = useRef(null);
  const [checkboxs, setCheckboxs] = useState([]);

  function checkboxClicker(index) {
    checkboxs[index].click();
  }

  useEffect(() => {
    const handleIframeLoad = () => {
      const iframeDocument =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow.document;

      const checks = iframeDocument.querySelectorAll(
        "input.leaflet-control-layers-selector"
      );
      setCheckboxs(checks);
    };

    // Add event listener to the iframe load event
    const iframe = iframeRef?.current;
    iframe.addEventListener("load", handleIframeLoad);

    // Clean up event listener
    return () => {
      iframe.removeEventListener("load", handleIframeLoad);
    };
  }, []);
  return (
    <div className="flex relative w-full bg-[#e7e7e7] text-black">
      <div className="w-[40vw]">
        <div className="m-6">
          <Button className="w-full font-bold text-white text-2xl rounded-full py-2 px-6 flex items-center gap-6">
            <AlignJustify size={70} />
            <p className="text-4xl font-semibold text-nowrap">PETA TEMATIK</p>
          </Button>
        </div>
        <Accordion title="Persebaran Masyarakat Rentan dan Miskin">
          <div className="flex flex-col">
            <Checkbox
              label="Disabilitas"
              id="disabilitas"
              defaultChecked
              onChange={() => checkboxClicker(4)}
            />
            <Checkbox
              label="Ibu Hamil"
              id="ibu-hamil"
              defaultChecked
              onChange={() => checkboxClicker(5)}
            />
            <Checkbox
              label="Lansia"
              id="lansia"
              defaultChecked
              onChange={() => checkboxClicker(2)}
            />
            <Checkbox
              id="kurang-mampu"
              label="Kurang Mampu"
              defaultChecked
              onChange={() => checkboxClicker(3)}
            />
          </div>
        </Accordion>
        <Accordion title="Persebaran Fasilitas Kesehatan">
          <div className="flex flex-col">
            <Checkbox
              id="puskesmas"
              label="Puskesmas"
              defaultChecked
              onChange={() => checkboxClicker(0)}
            />
            <Checkbox
              id="rumah-sakit"
              label="Rumah Sakit"
              defaultChecked
              onChange={() => checkboxClicker(1)}
            />
          </div>
        </Accordion>
        <div className="py-2 px-6 bg-white absolute bottom-0 w-full">
          <div className="flex">
            <Image
              src="/images/icon-disabilitas-green.svg"
              alt="icon-disabilitas-green"
              width={20}
              height={20}
            />
            <p>: Telah Terdaftar</p>
          </div>
          <div className="flex">
            <Image
              src="/images/icon-disabilitas-red.svg"
              alt="icon-disabilitas-red"
              width={20}
              height={20}
            />
            <p>: Belum Terdaftar</p>
          </div>
        </div>
      </div>
      <div className="w-[60vw] bg-white min-h-[90vh]">
        <iframe
          ref={iframeRef}
          src="/qgis/index.html"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="QGIS Page"
        />
      </div>
    </div>
  );
}
