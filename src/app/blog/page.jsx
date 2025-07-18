// "use client";

// import DashboardLayout from "../../components/DashboardLayout";
// import "./index.scss";
// import Link from "next/link";
// import BlogCard from "../../components/blogCard";
// import useFetchBlogs from '../../hooks/useFetchBlogs';
// import ContactCard from "../../components/contactCard";
// import { useEffect, useState } from "react";
// import { stringify, parse } from "flatted";

// export default function Blog() {
//     const [cachedBlogs, setCachedBlogs] = useState([]);
//     const [isMounted, setIsMounted] = useState(false);
//     const { blogsPreview, loading, error } = useFetchBlogs({ contentType: "blogPage" });

//     // Set mounted state after initial render
//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     // Ensure localStorage is accessed only in the browser and after mounting
//     useEffect(() => {
//         if (isMounted && typeof window !== "undefined") {
//             try {
//                 const storedBlogs = localStorage.getItem("blogsPreview");
//                 if (storedBlogs) {
//                     const parsedBlogs = parse(storedBlogs);
//                     if (Array.isArray(parsedBlogs) && parsedBlogs.length > 0) {
//                         setCachedBlogs(parsedBlogs);
//                     }
//                 }
//             } catch (err) {
//                 console.error("Error retrieving cached blogs:", err);
//             }
//         }
//     }, [isMounted]);

//     useEffect(() => {
//         if (isMounted && typeof window !== "undefined" && blogsPreview && blogsPreview.length > 0) {
//             try {
//                 localStorage.setItem("blogsPreview", stringify(blogsPreview));
//                 setCachedBlogs(blogsPreview);
//             } catch (err) {
//                 console.error("Error caching blogs:", err);
//             }
//         }
//     }, [blogsPreview, isMounted]);

//     // Determine which blogs to show based on loaded data and cache
//     const blogs = blogsPreview.length > 0 ? blogsPreview : cachedBlogs;

//     // Skip rendering during initial hydration
//     if (!isMounted) {
//         return null;
//     }

//     if (loading && blogs.length === 0) {
//         return (
//             <DashboardLayout>
//                 <div className="blog">
//                     <div className="home__top">
//                         <h1 className='home-title'>My writings📝</h1>
//                     </div>
//                     <p className="blog__loading">Loading blogs...</p>
//                 </div>
//             </DashboardLayout>
//         );
//     }

//     if (error && blogs.length === 0) {
//         return (
//             <DashboardLayout>
//                 <div className="blog">
//                     <div className="home__top">
//                         <h1 className='home-title'>My writings📝</h1>
//                     </div>
//                     <p>Error loading blogs. Please try again later.</p>
//                 </div>
//             </DashboardLayout>
//         );
//     }

//     return (
//         <DashboardLayout>
//             <div className="blog">
//                 <div className="home__top">
//                     <h1 className='home-title'>My writings📝</h1>
//                     <div className="availability">
//                         <div className="available">
//                             <div className="green_blink"></div>
//                             <span>Available for work</span>
//                         </div>
//                         <div className="contact-btn">
//                             <Link href="/contact">
//                                 <span>Contact Me</span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <p className='home-about'>
//                     I write about products, product management, project management, software, leadership and life in general. I share my thoughts, experiences, and knowledge on these topics. I hope you find them helpful and interesting. Enjoy!🚀
//                 </p>
//                 {blogs && blogs.length > 0 ? (
//                     <>
//                         {blogs[0]?.fields?.image && (
//                             <div className="blog__top-card-wrapper">
//                                 <Link href={`/blog/${blogs[0]?.fields?.slug}`} passHref className="blog__top-card">
//                                     <img 
//                                         src={`${blogs[0].fields.image.fields.file.url}?q=35`}
//                                         alt={blogs[0].fields.image.fields.title || ""}
//                                     />
//                                     <div className="blog__top-card-content">
//                                         <span>{blogs[0].fields.date}</span>
//                                         <h3>{blogs[0].fields.title}</h3>
//                                     </div>
//                                 </Link>
//                             </div>
//                         )}
//                         <h2 className="all_blogs__header">All Articles</h2>
//                         <div className="all_blogs__wrapper">
//                             {blogs.slice(1).map((blog) => (
//                                 blog?.fields?.image && (
//                                     <BlogCard
//                                         key={blog.sys.id}
//                                         title={blog.fields.title}
//                                         date={blog.fields.date}
//                                         tag={blog.fields.tag}
//                                         img={`${blog.fields.image.fields.file.url}?q=35`}
//                                         link={`/blog/${blog.fields.slug}`}
//                                         alt={blog.fields.image.fields.title}
//                                     />
//                                 )
//                             ))}
//                         </div>
//                     </>
//                 ) : (
//                     <div className="blog__loading">No blogs available right now.</div>
//                 )}
//                 <ContactCard />
//             </div>
//         </DashboardLayout>
//     );
// }