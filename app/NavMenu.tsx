import { SignInButton } from "@/components/buttons";
import { SignOutButton } from "@/components/buttons";
import AuthCheck from '@/components/AuthCheck';

export default function NavMenu() {
  return (
    <nav className="flex mx-auto bg-indigo-600">
    <div className="container flex items-center mx-auto justify-between p-6">
  <a href="/" className="flex items-center flex-shrink-0 text-white mr-8">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Myspace</span>
  </a>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="/about" className="block mt-4 font-semibold lg:inline-block lg:mt-0 text--white hover:text-white mr-4">
        About
      </a>
      <a href="/blog" className="block mt-4 font-semibold lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        Blog
      </a>
      <a href="/users" className="block mt-4 font-semibold lg:inline-block lg:mt-0 text-white hover:text-white">
        Users
      </a>
      </div>
      <div className="grid justify-items-end font-semibold lg:flex lg:items-center lg:w-auto space-x-4">
        <SignInButton />
        <AuthCheck>
            <SignOutButton />
          </AuthCheck>
    </div>
    </div>
    </div>
</nav>
  );
}