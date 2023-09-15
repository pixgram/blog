import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm RSPark"}</h2>
      <h3 className="text-xl font-semibold">
        Front-end interactive engineer with WebGL
      </h3>
      <p>I am interested in fun expressions using WebGL.</p>
      <Link
        className="inline-block bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2"
        href="/contact"
      >
        Contact Me
      </Link>
    </section>
  );
}
