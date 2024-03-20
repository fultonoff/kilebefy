import AuthNav from "@/components/AuthNav"
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/kilebefy-black.png";
import RegisterForm from "../_components/RegisterForm";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

const Register = async () => {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }
  return (
    <main className="bg-gradient-to-b from-destructive/10 to-primary/20 min-h-screen">
      <div className=" container mx-auto ">
        <AuthNav />
        <div className="flex justify-center p-4 items-center flex-col">
          <Link href="/" className="mt-20 mb-1 w-20 h-20 ">
            <Image src={logo} alt="logo" className="w-12 object-contain" />
          </Link>

          <h1 className="font-bold text-2xl sm:text-4xl">
            Welcome to Kilebefy
          </h1>

          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default Register