import { prisma } from '@/lib/prisma';
import UserCard from '@/components/UserCard/UserCard';

export default async function Users() {

    const users = await prisma.user.findMany();

    return (
        <>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl ">Developers</h1>
        <p className="text-base font-semibold leading-7 text-indigo-200">Community Developers</p>
        <h2 className="pt-10 text-xl">Popular Developers</h2>
        <div className="container flex mx-auto mt-4 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-8 lg:grid-cols-4">
            {users.map((user) => {
                return <UserCard key={user.id} {...user} />;
            })}
        </div>
        </>
    );
}