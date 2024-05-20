import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <p>Hi, {user?.given_name}</p>
    </div>
  );
}
