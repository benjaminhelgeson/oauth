import { LoginButton } from "./LogInButton";
import { SignUpButton } from "./SignUpButton";
import { LogOutButton } from "./LogOutButton";
import { useAuth0 } from "@auth0/auth0-react"

const SiteIntro = () => {
    const { user } = useAuth0();

    return (
        <div className="text-base text-center py-5">
            <div className="flex justify-center">
                <div className="p-1 mx-5 max-w-3xl">This is created using Vite, React, React-oAuth, Tailwind, and Typescript. It's a stub for implementing
                oAuth in future sites. It serves as a personal project to simply get more familiar with oAuth and using it 
                in lieu of passwords for future projects that I work on.</div>
            </div>

            {user ? (
                <>
                    <div className="font-bold mt-2">Account Information Display</div>
                    <div className="flex justify-center py-2">
                        <div className="flex-col text-right content-center">
                            <img src={user.picture} />
                        </div>
                        <div className="flex-col text-left p-3 content-center">
                            <div><span className="font-bold">Username:</span> {user.name}</div>
                            <div><span className="font-bold">Nickname:</span> {user.nickname}</div>
                        </div>
                    </div>
                    <div className="flex-col p-2">
                        <LogOutButton></LogOutButton>
                    </div>
                </>
            ) : (
                <div className="flex justify-center">
                    <div className="flex-col p-2">
                        <LoginButton></LoginButton>
                    </div>
                    <div className="flex-col p-2">
                        <SignUpButton></SignUpButton>
                    </div>
                </div>
            )}
        </div>
    );
  }
  
  export default SiteIntro