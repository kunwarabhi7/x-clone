import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

const page = async () => {
  const user = await currentUser();
  const userInfo = {
    id: "come from database",
    username: "come from database",
    name: "come from database",
    bio: "bio",
    image: "image",
  };
  const userData = {
    id: user?.id,
    objectId: userInfo?.id,
    username: userInfo.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };
  return (
    <main className="flex flex-col items-center justify-start h-full mt-4 mx-auto px-10 py-20 max-w-3xl">
      <h1 className="text-2xl ">OnBoarding...</h1>
      <p className="text-gray-600 text-xs  ">
        Setup your profile now to use Twitter!!
      </p>
      <section className="mt-9 bg-black p-10 w-full">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default page;
