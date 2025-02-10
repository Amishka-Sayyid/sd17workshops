import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h1>Welcome !</h1>
      <h2>Sign in, please!</h2>
      <SignIn />
    </>
  );
}
