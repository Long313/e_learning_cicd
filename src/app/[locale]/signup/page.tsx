"use client";

import { useState, useEffect } from "react";
import FormSignUp from "../../components/Form/FormRegister";
import { useRouter } from "next/navigation";
import { registerUser } from "../../../service/api";
import { REGISTER_API, STATUS_SUCCESS } from "../../../constant";
import { toast } from "react-toastify";
import { ReactNode } from "react";
import { AppProps } from "next/app";
interface TypeData {
  repeatPassword: string;
}
interface RootLayoutProps extends AppProps {
  children: ReactNode;
  params: ParamProps;
}

interface ParamProps {
  locale: string;
}

export default function SignUp({
  children,
  params: { locale },
}: RootLayoutProps) {
  const router = useRouter();
  const handleRegister = async (data: TypeData) => {
    console.log("form data", data);
    const { repeatPassword, ...params } = data;
    const res = await registerUser(REGISTER_API, params);
    // console.log("Res", res);
    try {
      if (res.status === STATUS_SUCCESS) {
        toast.success("🚀 Register success !", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push(`/${locale}/login`);
      }
    } catch (err: any) {
      toast.error("🚀 Register failed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      throw new err();
    }
  };
  return (
    <main className="flex justify-center items-center w-full h-full">
      <FormSignUp submit={handleRegister} />
    </main>
  );
}
