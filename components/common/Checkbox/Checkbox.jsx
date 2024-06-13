import Image from "next/image";

export default function Checkbox({ label, id, ...rest }) {
  return (
    <div className="inline-flex items-center">
      <div className="relative flex items-center p-3 rounded-full cursor-pointer">
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border-2 border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity"
          id={id}
          {...rest}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-1/3 left-[26px] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <Image
            src="/images/checked.svg"
            alt="checked"
            width={20}
            height={20}
          />
        </span>
      </div>
      <label htmlFor={id} className="text-lg capitalize">
        {label}
      </label>
    </div>
  );
}
