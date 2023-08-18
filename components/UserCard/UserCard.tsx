import Link from 'next/link';

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    image: string | null;
}

export default function UserCard({ id, name, age, image}: Props) {
    return (
        <div className="mx-auto pt-10">
  <div className="mx-auto lg:grid lg:w-full lg:max-w-7xl">
    <div className="lg:pr-4">
      <div className="lg:max-w-xlg"></div>
        <div className="grid grid-cols-4 gap-4 ">
            <div className="w-80">
            <img
                src={image ?? 'mememan.webp'}
                alt={`${name}'s profile`}
                className="flex"
                width="100%"
            />
                <div className="font-semibold underline decoration-4 decoration-indigo-600 py-4 text-center">
                <h3>
                    <Link href={`/users/${id}`}>{name}</Link>
                </h3>
                </div>
            </div>
        </div></div></div></div>
    );
}