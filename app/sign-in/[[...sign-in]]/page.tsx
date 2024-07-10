import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className=" h-[88vh] flex justify-center items-center">
      <SignIn />;
    </div>
  );
}

export default SignInPage;
