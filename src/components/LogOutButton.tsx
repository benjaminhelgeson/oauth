import { useAuth0 } from "@auth0/auth0-react"; 

export const LogOutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700" 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};