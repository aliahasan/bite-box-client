import registerImage from "@/assets/register.png";
import RegisterFrom from "@/components/modules/auth/register/RegisterForm";
import Image from "next/image";
const RegisterPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full items-center justify-center p-4 md:p-10">
      <div>
        <Image src={registerImage} alt="registerImage" className="w-96" />
      </div>
      <div className="w-full max-w-md">
        <RegisterFrom />
      </div>
    </div>
  );
};

export default RegisterPage;
