import AuthForm from "@/components/auth/auth-form";

import AuthPageImg from "/public/images/auth.png";

export default function AuthPage() {
  return (
    <div className="px-[108px] flex justify-between items-center">
      <AuthForm />
      <div className="w-full max-w-lg">
        <img src={AuthPageImg.src} alt="" />
      </div>
    </div>
  );
}
