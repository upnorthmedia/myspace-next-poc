'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);


  if (status === 'authenticated') {
    return (
      <Link className="text-xs font-medium text-gray-300 sm:mb-0 dark:text-gray-300 bg-indigo-600 p-2 rounded-md" href={`/dashboard`}>
        Dashboard
      </Link>
    );
  }

  return <button className="text-xs font-medium text-gray-300 sm:mb-0 dark:text-gray-300 bg-indigo-600 p-2 rounded-md" onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button className="flex flex-wrap items-center mb-6 text-xs font-medium text-gray-300 sm:mb-0 dark:text-gray-300" onClick={() => signOut()}>Sign out</button>;
}