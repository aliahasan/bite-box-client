import notfound from "@/assets/notfound.jpg";
import Image from "next/image";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Not Found Image */}
      <div className="w-full max-w-md mb-8 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={notfound}
          alt="Page Not Found"
          className="object-cover w-full h-full"
          width={500} // Set a width for the image
          height={300} // Set a height for the image
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold ext-black dark:text-white mb-4">
        404 - Page Not Found
      </h1>

      {/* Description */}
      <p className="text-black dark:text-white text-center max-w-md mb-6">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>

      {/* Call to Action */}
      <Link
        href="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
