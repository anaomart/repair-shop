import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import {Button} from "@/components/ui/button";

export default function LoginPage(){


    return (
        <main className="h-dvh flex flex-col items-center  gap-6 text-2xl p-4">
            <h1>Login Page</h1>
            <Button asChild>
                <LoginLink>Sign in</LoginLink>
            </Button>
        </main>
    )
}