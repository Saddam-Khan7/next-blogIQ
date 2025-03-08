import React from "react";
import Hero from "./components/hero";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

const Homepage = async () => {
  const query = `*[_type == 'blogs'] | order(_updatedAt asc){
  title,paragraph,"slug":slug.current,image,content,tags
}`;

  const data: Blog[] = await client.fetch(query);
  console.log(data);

  return (
    <div>
      {data.map((data: Blog) => (
        <Hero data={data} key={data.slug} />
      ))}
    </div>
  );
};

export default Homepage;
