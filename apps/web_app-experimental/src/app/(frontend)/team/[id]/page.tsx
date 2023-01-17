import { useFragment } from "@/lib/gql";
import { GetUserDataDocument, UserItemFragmentDoc } from "@/lib/gql/graphql";
import { getGqlClient } from "@/lib/service/client";
import Image from "next/image";

async function getUser(id: string) {
  const client = getGqlClient();
  const { user } = await client.request(GetUserDataDocument, {
    id,
  });
  return user!;
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = useFragment(UserItemFragmentDoc, await getUser(id));
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-3 pb-8 sm:pt-4 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          {user.displayName}
        </h1>
        <div className="max-w-5xl ma-auto bg-gray-100 rounded text-center my-3 flex flex-col items-center">
          <Image
            className=""
            src={user.avatarUrl}
            alt={`${user.displayName} Picture`}
            width={48}
            height={48}
          ></Image>
          <div>{`${JSON.stringify(user.metadata)}`}</div>
        </div>
      </main>
    </div>
  );
}
