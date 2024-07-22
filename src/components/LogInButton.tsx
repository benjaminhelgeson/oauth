import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700" onClick={handleLogin}>
      Log In
    </button>
  );
};
