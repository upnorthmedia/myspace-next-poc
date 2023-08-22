import { SignInButton } from "@/components/buttons";
import { SignOutButton } from "@/components/buttons";
import AuthCheck from '@/components/AuthCheck';

export default function NavMenu() {
  return (
    <nav className="flex bg-gray-800">
    <div className="container flex items-center mx-auto justify-between py-6">
    <a href="/" className="flex items-center mb-4 mr-6 sm:mb-0 font-extrabold ">
                        <img src="/logo.svg" className="h-8" alt="Logo" />
                        
                    </a>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-300">
      <a href="/files" className="mr-4 hover:text-white md:mr-6">
        Files
      </a>
      <a href="/guides" className="mr-4 hover:text-white md:mr-6">
        Guides
      </a>
      <a href="/users" className="mr-4 hover:text-white md:mr-6">
        Developers
      </a>
      <a href="/about" className="mr-4 hover:text-white md:mr-6">
        About
      </a>
      </div></div>
      <div className="grid justify-items-end font-semibold lg:flex lg:items-center lg:w-auto space-x-4">
      <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        <SignInButton />
    
    </div>
    </div>
</nav>
  );
}