import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/gallery/newlook-logo1.png"
            alt="New Look Paving & Masonry"
            width={180}
            height={90}
            className="h-20 w-auto mx-auto animate-pulse"
            priority
          />
        </div>

        {/* Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-dark-500 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

