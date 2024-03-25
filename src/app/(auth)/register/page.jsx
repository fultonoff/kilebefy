
import RegisterForm from "../../_components/RegisterForm";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import AuthWrapper from "@/components/AuthWrapper";

const Register = async () => {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }
  return (
  

    <AuthWrapper topNav title='Welcome to Kilebefy'>
<RegisterForm />

    </AuthWrapper>
  );
};

export default Register