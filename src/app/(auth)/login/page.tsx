import { ClientOnly } from "@/components/ClientOnly";
import FormLogIn from "@/components/page/auth/login/FormLogIn";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-1/2 max-lg:w-full flex px-20 max-lg:px-6">
      <p className="text-sm justify-end absolute top-10 right-10 flex gap-1 items-center">
        Não possuí uma conta?{" "}
        <Link href="/signIn" className="link">
          Cadastre-se
        </Link>
      </p>

      <ClientOnly>
        <FormLogIn />
      </ClientOnly>
    </div>
  );
}
