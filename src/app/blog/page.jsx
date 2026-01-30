import React, { Suspense } from "react";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchArticles() {
  console.log(`fetching articles from: ${API_URL}`);
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer REDACTED-TOKEN",
    },
    cache: "no-store", // Ensure the request is not cached
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Failed to fetch articles: ${res.status} - ${res.statusText} - ${errorText}`
    );
  }

  return res.json();
}

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80%]">
      <Skeleton className="h-[450px] rounded-xl" />
      <Skeleton className="h-[450px] rounded-xl" />
      <Skeleton className="h-[450px] rounded-xl" />
      <Skeleton className="h-[450px] rounded-xl" />
      <Skeleton className="h-[450px] rounded-xl" />
      <Skeleton className="h-[450px] rounded-xl" />
    </div>
  );
};

const BlogContent = async () => {
  const articles = await fetchArticles();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80%]">
      {articles.map((article, index) => (
        <Link
          href={`/blog/${article.title
            .replace(/[^a-zA-Z0-9 -]/g, "")
            .replace(/ /g, "-")
            .toLowerCase()}-${article.id}`}
          key={index}
          className="relative flex flex-col gap-0 shadow-2xl rounded-2xl transition-transform ease-out delay-150 hover:-translate-y-2 hover:scale-100 duration-400"
        >
          <img
            className="w-full h-96 object-cover rounded-t-2xl active:opacity-80"
            alt={article.author}
            src={article.content.thumbnail}
          />
          <h2 className="font-bold text-xl text-center p-2 bg-[#0184C9] text-white">
            {new Date(article.publish_date).toLocaleDateString("en-US", {
              timeZone: "America/New_York",
            })}
          </h2>
          <div className="flex flex-col items-start gap-4 px-4 pt-4 pb-16">
            <h3 className="text-2xl font-semibold">{article.title}</h3>
            <p className="absolute bottom-5 text-lg font-bold text-[#0184C9] hover:text-[#0184C9]">
              {article.author}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default async function Blog() {
  return (
    <div>
      <Header />
      <Hero
        imageUrl="/assets/images/banner/banner-blogs.jpg"
        page="blog"
        title="BLOG"
      />
      <section className="py-14 mx-6 md:mx-28 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-4 items-center justify-center w-[80%] bg-[#E5F6FF] p-8 rounded-2xl">
            <h2 className="text-2xl text-black font-semibold">Disclaimer</h2>
            <p className="md:text-xl">
              {
                "The entire contents of this website are based upon the opinions of Dr. Dhia Mahmud, unless otherwise noted. Individual articles are based upon the opinions of the respective author, who retains copyright as noted. The information on this website is not intended to replace a one-on-one relationship with a qualified health care professional and is not intended as medical advice. It is intended as a sharing of knowledge and information from the research and experience of Dr. Dhia Mahmud."
              }
            </p>
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <BlogContent />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}
