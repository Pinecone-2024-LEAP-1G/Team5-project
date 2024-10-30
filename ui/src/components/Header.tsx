"use client";

import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className=" mx-auto flex max-w-[1240px] h-[80px] items-center justify-between ">
      <div className="flex w-200 h-[28px] items-center ">
        <img className="w-[129px] h-[28px]" src="/icons/ecomlog.svg" />

        <p className="text-white w-[67px] h-[28px] ml-[40px] cursor-pointer">
          Ангилал
        </p>
      </div>
      <div className="flex ">
        <img className="" src="/icons/Search.svg " />
        <input
          className="bg-primary [250px] w-[300px] h-[28px] rounded-full text-center"
          type="search"
          placeholder=" Бүтээгдэхүүн хайх..."
        />
      </div>
      <div className="flex">
        <img className="px-3" src="/icons/Heart.svg" />
        <img className="px-3" src="/icons/Shop.svg" />
        <Button
          className="rounded-full mx-3 border-[#2563EB] text-white hover:bg-[#2563EB]  "
          variant="outline"
        >
          Бүртгүүлэх
        </Button>
        <Button
          className="rounded-full mx-3 bg-[#2563EB] text-white hover:border-[#2563EB] "
          variant="default"
        >
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
};
