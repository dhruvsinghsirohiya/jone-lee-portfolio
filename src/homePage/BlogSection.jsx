import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import blogImg1 from "./homeAllImg/blogImg/blog-01.jpg";
import blogImg2 from "./homeAllImg/blogImg/blog-02.jpg";
import blogImg3 from "./homeAllImg/blogImg/blog-03.jpg";
const BlogSection = () => {
  const blogImg = [
    {
      title: "Canada",
      img: blogImg1,
      period: "2 min read",
      detail: "T-shirt design is the part of design",
    },
    {
      title: "Development",
      img: blogImg3,
      period: "2 hour read",
      detail: "The services provide for design ",
    },
    {
      title: "Application",
      img: blogImg2,
      period: "5 min read",
      detail: "Mobile app landing design & app maintain",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div id="blog" className="w-[90%] border-b border-black py-20 mx-auto">
      <h6 className="text-[#ff014f] text-[14px] text-center leading-[24px] md:leading-[14px] tracking-[1px] uppercase">
        Visit my blog and keep your feedback
      </h6>
      <h1 className="text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] my-2 text-center font-bold">
        My Blog
      </h1>
      <div className="w-full my-8 flex-wrap gap-6 md:flex justify-between">
        {blogImg.map((blog, i) => (
          <div
            key={i}
            onClick={() => openModal(blog)}
            className="xl:w-[31%] md:w-[48%] mb-7 md:mb-0 w-full home-icon-btn rounded-lg duration-[900] flex justify-center items-center flex-col cursor-pointer px-6 md:px-8 py-8 md:py-8"
          >
            <div className="w-full mb-1 portfolio-img rounded-xl">
              <img src={blog.img} className="w-full" alt="" />
            </div>
            <div className="w-full flex  px-1 my-3 justify-between">
              <p className="text-[#ff014f] text-[12px] tracking-[1px] uppercase">
                {blog.title}
              </p>
              <p className="flex text-[13px] gap-1 font-semibold items-center text-[#c4cfde]">
                <IoTimeOutline />
                <span>{blog.period}</span>
              </p>
            </div>
            <div className="text-[20px] md:text-[23px] px-1 text-[#c4cfde] font-semibold">
              {blog.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
