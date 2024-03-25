import LoginForm from "../../_components/LoginForm";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

import AuthWrapper from "@/components/AuthWrapper";

const LoginPage = async () => {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }
  return (
    <AuthWrapper topNav title="Welcome Back">
      <LoginForm />
    </AuthWrapper>
  );
};

export default LoginPage;
