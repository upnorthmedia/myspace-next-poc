import { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About Myspace',
};

export default function Blog() {
    return (
<div className="relative isolate overflow-visible px-6 py-24 sm:py-32 lg:px-0">

<div className="mx-auto">
  <div className="mx-auto lg:grid lg:w-full lg:max-w-7xl">
    <div className="lg:pr-4">
      <div className="lg:max-w-xlg">
        <p className="text-base font-semibold leading-7 text-indigo-600">Myspace</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h1>
        <p className="mt-6 text-xl leading-8 text-white">
        We are a cool social media proof of concept for my Fireship course!
        </p>
      </div>
    </div>
  </div>
  </div>
</div>
    );
}