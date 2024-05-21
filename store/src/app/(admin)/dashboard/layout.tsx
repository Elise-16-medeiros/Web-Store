import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
//import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import AdminNav from "../_components/adminNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
    }) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
  //const { user } = useKindeBrowserClient();

  if (!user) {
    redirect("/");
  }
  return <section>
   
    {children}
  </section>;
}
