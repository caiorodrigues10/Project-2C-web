import { OneToOne } from "@/components/page/services/oneToOne";
import { IFaces } from "@/services/faces/types";
import { useServer } from "@/utils/useServer";
import { redirect } from "next/navigation";

export default async function CompareFacesPage({
  params,
}: {
  params: { id: string };
}) {
  const face = await useServer<IFaces>({
    pathname: "faces/byId/" + params.id,
  });

  if (!face) {
    return redirect("/services/oneToOne");
  }

  return <OneToOne faceData={face?.data || ({} as IFaces)} />;
}
