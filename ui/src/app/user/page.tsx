import Link from "next/link";

const Home = () => {
  return (
    <div className="  pt-28 pb-[480px] flex justify-center">
      <div className=" flex justify-center w-[884px] h-[509px]">
        <div className="w-[244px] h-[76px]">
          <button className="w-[224px] h-[36px]">Хэрэглэгчийн хэсэг</button>

          <Link href={"orderHistory"}>
            <button className="w-[224px] h-[36px]">Захиалгын түүх </button>
          </Link>
        </div>
        <div className="w-[620px] h-[509px]">
          <div className=" ">
            <p className=" text-lg font-bold ">Хэрэглэгчийн хэсэг</p>
            <div className="w-full h-[49px]">
              <p className="border-b-2 pt-4"></p>
            </div>
            <div className="mb-4">
              <p>Овог:</p>
              <input className=" border-2 rounded-2xl w-full h-7 " />
            </div>
            <div className="mb-4">
              <p>Нэр:</p>
              <input className=" border-2 rounded-2xl w-full h-7" />
            </div>
            <div className="mb-4">
              <p>Утасны дугаар:</p>
              <input className="border-2 rounded-2xl w-full h-7" />
            </div>
            <div className="mb-4">
              <p>Имэйл хаяг:</p>
              <input className="border-2 rounded-2xl w-full h-7" />
            </div>
            <div className="mb-4">
              <p>Хаяг</p>
              <input className="border-2 rounded-2xl w-full h-[94px]" />
            </div>
            <div className=" flex justify-end ">
              <button className=" w-[140px] h-[20px] text-center rounded-2xl bg-blue-600 text-xs text-slate-100">
                Мэдээлэл шинэчлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
