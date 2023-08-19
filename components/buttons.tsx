'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <div className="flex flex-wrap items-center mb-6 text-xs font-medium text-gray-300 sm:mb-0 dark:text-gray-300">Signing In...</div> ;
  }

  if (status === 'authenticated') {
    return (
      <Link href={`/dashboard`}>
        <Image
          className="w-7 h-7 rounded" 
          src={session.user?.image ?? '/mememan.webp'} 
          alt="user"
          width={32}
          height={32}
          />
      </Link>
    );
  }

  return <button className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-300" onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button className="flex flex-wrap items-center mb-6 text-xs font-medium text-gray-300 sm:mb-0 dark:text-gray-300" onClick={() => signOut()}>Sign out</button>;
}