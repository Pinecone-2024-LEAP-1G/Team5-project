"use client";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Нууц үг ижил биш байна");

      setLoading(false);

      return;
    }

    console.log({ email, name, password });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex-col flex gap-12 w-[334px]">
      <p className="font-semibold text-2xl text-center">Бүртгүүлэх</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          id="name"
          placeholder="Нэр"
          className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Имэйл хаяг"
          className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password "
          id="password"
          minLength={8}
          placeholder="Нууц үг"
          className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          id="confirm-password"
          placeholder="Нууц үг давтах"
          className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-600">{error}</p>}

        <div className="flex flex-col pl-4">
          <ul className="list-disc flex flex-col gap-1">
            <li className="text-[#71717A]">Том үсэг орсон байх</li>

            <li className="text-[#71717A]">Жижиг үсэг орсон байх</li>

            <li className="text-[#71717A]">Тоо орсон байх</li>

            <li className="text-[#71717A]">Тэмдэгт орсон байх</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="bg-blue-600 rounded-[18px] w-full h-[36px] text-[#FAFAFA] ">
            Үүсгэх
          </button>
        </div>
      </form>
      <button
        type="button"
        className="border-solid border border-blue-600 rounded-[18px] w-full h-[36px] text-[#2563EB]">
        Нэвтрэх
      </button>
    </div>
  );
};

export default SignUp;
