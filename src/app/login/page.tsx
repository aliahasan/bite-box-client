import loginImage from "@/assets/login.png";
import LoginForm from "@/components/modules/auth/login/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full items-center justify-center p-4 md:p-10">
      <div>
        <Image src={loginImage} alt="loginImage" className="w-96" />
      </div>
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
