import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from './ProfileForm';
import { redirect } from 'next/navigation';
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });
  return (
    <>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl ">Dashboard</h1>
        <p className="text-base mt-4 font-semibold leading-7 text-indigo-200">{`Hey, ${user.name!}`}</p>
        <h2 className="mt-4 text-xl">Edit Your Profile</h2>
        <ProfileForm user={user} />
    </>
  );
}