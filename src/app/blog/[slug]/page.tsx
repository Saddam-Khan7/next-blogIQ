import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == 'blogs' && slug.current == "${slug}"]{
  title,paragraph,image,content
  }[0]`;

  const data = await client.fetch(query);

  // console.log(data);

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {data.title}
      </h1>
      {/* Featured Image */}
      <Image
        src={urlFor(data.image).url()}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />
      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          I am starting a new Nextjs courses series In this vedio of Nextjs
          Tutorial for Beginners I am first giving you nexjs introduction and
          then I am guiding you about the installation of nextjs step by step so
          after watching this vedio you are now about what is nextjs why use
          nextjs and important features of nextjs Also stayed tuned for next
          vedio of this series
        </p>
      </section>
      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={"/car.png"}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">EmAar</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            Experienced Web Developer | Expert in WordPress Nextjs Reactjs
            Nodejs Typescript JavaScript GitHub Sanity Tailwind CSS |
            Participant in PIAIC and GIAIC
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={data.content} />
      </section>
    </article>
  );
}
