import { ClientOnly } from "@/components/ClientOnly";
import { FormSignIn } from "@/components/page/auth/signIn/FormSignIn";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function SignInPage() {
  const name = cookies().get("2c.token")?.value;

  if (name) {
    redirect("/services");
  }

  return (
    <div className="w-1/2 max-lg:w-full flex px-20 max-lg:px-6">
      <p className="text-sm justify-end absolute top-10 right-10 flex gap-1 items-center ">
        Já possuí uma conta?{" "}
        <Link href="/login" className="link">
          Entrar
        </Link>
      </p>

      <ClientOnly>
        <FormSignIn />
      </ClientOnly>
    </div>
  );
}
