import { ProductCard } from "@/components/ProductCard";

const Page = () => {
  return (
    <div className="flex mx-auto gap-[100px] max-w-[1039px] h-[2140px]">
      <div>
        <div className="">
          <p className="font-bold cursor-pointer">Ангилал</p>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">Малгай</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" name="Усны сав" />
            <p className="ml-[10px] cursor-pointer">Усны сав</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">T-shirt</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">Hoodie</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">Tee</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">Цүнх</p>
          </div>
        </div>
        <div className="">
          <p className="font-bold cursor-pointer">Хэмжээ</p>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">Free</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">S</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">M</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">L</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">XL</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">2XL</p>
          </div>
          <div className="flex">
            <input className="cursor-pointer" type="checkbox" />
            <p className="ml-[10px] cursor-pointer">3XL</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white mx-auto max-w-[1038px] flex gap-5 mt-[20px] ">
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
        </div>
        <div className="bg-white mx-auto max-w-[1038px] flex gap-5 mt-[20px] ">
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
        </div>
        <div className="bg-white mx-auto max-w-[1038px] flex gap-5 mt-[20px] ">
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
          <ProductCard
            image="/photo/cardHero.svg"
            name="The Prompt Magazine"
            price="120,000$"
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
