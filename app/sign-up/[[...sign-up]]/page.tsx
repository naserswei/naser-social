import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return (
    <div className=" h-[88vh] flex justify-center items-center">
      <SignUp />;
    </div>
  );
}

export default SignUpPage;
