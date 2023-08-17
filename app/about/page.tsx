import { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About Myspace',
};

export default function Blog() {
    return (
<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
<div className="absolute inset-0 -z-10 overflow-hidden">
  <svg
    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
        width={200}
        height={200}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M100 200V.5M.5 .5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
      <path
        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
        strokeWidth={0}
      />
    </svg>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
  </svg>
</div>
<div className="mx-auto">
  <div className="mx-auto lg:grid lg:w-full lg:max-w-7xl">
    <div className="lg:pr-4">
      <div className="lg:max-w-xlg">
        <p className="text-base font-semibold leading-7 text-indigo-600">Myspace</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
        We are a cool social media proof of concept for my Fireship course!
        </p>
      </div>
    </div>
  </div>
  </div>
</div>
    );
}