import { Card } from "@/components/Card";
import { ClientOnly } from "@/components/ClientOnly";
import { FormChangePassword } from "@/components/page/forgotPassword/FormChangePassword";
import { AppResponse } from "@/services/AppResponse";
import { useServer } from "@/utils/useServer";
import { redirect } from "next/navigation";

export default async function ForgotPasswordPage({
  params,
}: {
  params: { token: string };
}) {
  const verifyToken = await useServer<AppResponse>({
    pathname: `users/forgotPassword/validate`,
    query: [{ name: "token", value: params.token }],
  });

  if (verifyToken?.result === "error") {
    redirect("/");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-t from-zinc-300 to-zinc-50 dark:from-zinc-950 dark:to-zinc-800">
      <Card className="mx-8 w-[500px] gap-4 flex flex-col">
        <h1 className="font-semibold text-2xl text-center">Alterar senha</h1>
        <ClientOnly
          fallback={
            <div className="gap-6 flex flex-col">
              <div className="flex flex-col gap-7">
                <div className="h-12 w-full animate-pulse rounded-xl bg-zinc-300 dark:bg-zinc-500" />
                <div className="h-12 w-full animate-pulse rounded-xl bg-zinc-300 dark:bg-zinc-500" />
              </div>
              <div className="h-10 w-full animate-pulse rounded-xl bg-zinc-300 dark:bg-zinc-500 mt-3" />
            </div>
          }
        >
          <FormChangePassword token={params.token} />
        </ClientOnly>
      </Card>
    </div>
  );
}
