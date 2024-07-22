import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignUpButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/account",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };

  return (
    <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};
