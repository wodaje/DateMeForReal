import { Auth } from "aws-amplify";

const SignOutBtn = () => {
  const signOut = () => {
    Auth.signOut();
  };

  return <button onClick={signOut}>Sign Out</button>;
};

export default SignOutBtn;
