import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/b.jpeg" 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

      {/* Hero Section */}
      <div className="text-center text-white px-6">
        <h1 className="text-5xl sm:text-6xl font-bold">Welcome to Our Multipurpose Template</h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          Explore our premium multipurpose website templates and build your professional site effortlessly.
        </p>
        <Link href="/login">
          <a className="inline-block mt-8 px-10 py-4 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600">
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
}
