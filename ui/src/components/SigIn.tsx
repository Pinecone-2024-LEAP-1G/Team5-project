export default function Signin() {
  return (
    <div className="flex flex-col gap-12 w-[334px] ">
      <p className="font-semibold text-2xl text-center">Нэвтрэх</p>
      <div className="flex flex-col gap-4">
        <input
          type="email"
          id="email"
          placeholder=" Имэйл хаяг"
          className="w-full h-[34px] border-solid border rounded-[18px] text-[#E4E4E7] py-1 px-3"
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Нууц үг"
          className="w-full h-[34px] border-solid border rounded-[18px]  py-1 px-3"
          color="#E4E4E7"
          required
        />
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="bg-blue-600 rounded-[18px] w-full h-[36px] text-[#FAFAFA]">
            Нэвтрэх
          </button>
          <p className="text-sm text-[#71717A] text-center">Нууц үг мартсан</p>
        </div>
      </div>

      <button
        type="button"
        className="border-solid border border-blue-600 rounded-[18px] w-full h-[36px] text-[#2563EB]">
        Бүртгүүлэх
      </button>
    </div>
  );
}
