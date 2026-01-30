import Footer from "@/components/Footer";
import Header from "@/components/Navbar/Header";
import React from "react";
import Image from "next/image";
import ContentRenderer from "@/components/Blogs/ContentRenderer";
import HeroBlogs from "@/components/HeroBlogs";
import Link from "next/link";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getArticle = async (url, id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.BLOG_API_TOKEN || ""}`,
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

export async function generateMetadata({ params }) {
  if (!API_URL) {
    return { title: "Blog | Broadway Smiles" };
  }

  try {
    const data = await getArticle(API_URL, params.blogId.split("-").pop());
    return {
      title: data?.title,
      description: data?.metadata?.description,
      metadataBase: new URL("https://broadwaysmiles.ca"),
      alternates: { canonical: `/blog/${params.blogId}` },
      openGraph: {
        title: data?.title,
        description: data?.metadata?.description,
        url: `/blog/${params.blogId}`,
        images: data?.img ? [{ url: data.img }] : [],
      },
    };
  } catch {
    return { title: "Blog | Broadway Smiles" };
  }
}

export default async function Article({ params }) {
  if (!API_URL) {
    redirect("/blog");
  }

  const blogId = params.blogId.split("-").pop();

  let data;
  try {
    data = await getArticle(API_URL, blogId);
  } catch {
    redirect("/blog");
  }

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
              src="/assets/images/icons/author-icon.png"
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
              src="/assets/images/icons/clock-icon.png"
              className="w-6"
              alt={author || "unknown"}
              width={75}
              height={75}
            />
            <h2 className="text-lg sm:text-xl md:text-xl font-semibold">
              {publish_date
                ? new Date(publish_date).toLocaleDateString("en-US", {
                    timeZone: "America/New_York",
                  })
                : ""}
            </h2>
          </span>
        </div>
        <ContentRenderer content={content} thumbnail={content?.thumbnail} />
        <Link href="/blog" className="text-xl font-bold text-[#0184C9]">
          ← Back to blogs
        </Link>
      </section>
      <Footer />
    </>
  );
}
