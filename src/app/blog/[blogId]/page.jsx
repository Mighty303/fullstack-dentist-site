import Footer from "@/components/Footer";
import Header from "@/components/Navbar/Header";
import React from "react";
import Image from "next/image";
import ContentRenderer from "@/components/Blogs/ContentRenderer";
import HeroBlogs from "@/components/HeroBlogs";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getArticle = async (url, id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer REDACTED-TOKEN",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  let res = await response.json();

  if (res[0]?.title) {
    res = res[0];
  }

  return res;
};

// Function to generate dynamic metadata
export async function generateMetadata({ params }) {
  const url = API_URL;

  const data = await getArticle(url, params.blogId.split("-").pop());
  const title = data?.title;
  const description = data?.metadata.description;
  const keywords = data?.metadata.keywords;
  const author = data?.author;
  const img = data?.img;
  const publish_date = data?.publish_date;

  return {
    title: title,
    description: description,
    metadataBase: new URL("https://broadwaysmiles.ca"),
    alternates: {
      canonical: `/blog/${params.blogId}`,
    },
    author: author,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: `/blog/${params.blogId}`,
      images: [
        {
          url: img,
        },
      ],
    },
    httpEquiv: { "last-modified": data?.metadata.last_updated },
  };
}

const Article = async ({ params }) => {
  const endpoint = API_URL;
  const blogId = params.blogId.split("-").pop();
  console.log(
    "======================================================================================================="
  );
  console.log(blogId);
  console.log(
    "======================================================================================================="
  );

  const data = await getArticle(endpoint, blogId);

  const title = data?.title;
  const content = data?.content;
  const author = data?.author;
  const img = data?.content?.thumbnail;
  const publish_date = data?.publish_date;

  return (
    <>
      <Header />
      <HeroBlogs
        title={title}
        page="Blogs"
        blogs={title}
        imageUrl="/assets/images/banner/banner-blogs.jpg"
      />
      <section className="flex flex-col justify-center items-center py-14 gap-8 w-4/6 mx-auto">

        <Image
          className="rounded-xl w-full md:w-1/3"
          alt={author || "unknown"}
          width={500}
          height={500}
          src={img}
        />
        <div className="flex justify-center items-center gap-6 text-black">
          <span className="flex items-center gap-2">
            <Image
              src={"/assets/images/icons/author-icon.png"}
              className="w-6"
              alt={author || "unknown"}
              width={75}
              height={75}
            />
            <h2 className="text-lg sm:text-xl md:text-xl font-semibold">
              {author || "unknown"}
            </h2>
          </span>
          <span className="flex items-center gap-2">
            <Image
              src={"/assets/images/icons/clock-icon.png"}
              className="w-6"
              alt={author || "unknown"}
              width={75}
              height={75}
            />
            <h2 className="text-lg sm:text-xl md:text-xl font-semibold">
              {new Date(publish_date).toLocaleDateString("en-US", {
                timeZone: "America/New_York",
              })}
            </h2>
          </span>
        </div>
        <ContentRenderer content={content} thumbnail={content?.thumbnail} />
        <Link href={"/blog"} className="text-xl font-bold text-[#0184C9]">
          ← Back to blogs
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Article;
