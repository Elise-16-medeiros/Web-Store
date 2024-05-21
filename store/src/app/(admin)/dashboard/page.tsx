import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col gap-y-3">
      <h1 className="text-3xl font-bold">DASHBOARD PAGE</h1>
      <p>Hi, {user?.given_name}</p>
    </div>
  );
}
