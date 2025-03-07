import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import backIcon from "../../../assests/backIcon.svg";
import facebook from "../../../assests/blackFacebook.svg";
import copyLink from "../../../assests/copyLink.svg";
import twitter from "../../../assests/blackTwitter.svg";
import linkedin from "../../../assests/blackLinkedIn.svg";
import noImage from "../../../assests/noBlogImage.png";

const BlogPostContentFeatures = ({ post }) => {
  const [showCopyPopup, setShowCopyPopup] = useState(false);

  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyPopup(true);
    setTimeout(() => {
      setShowCopyPopup(false);
    }, 2000); // Popup will disappear after 2 seconds
  };

  const imageUrl =
    post.attributes &&
    post.attributes.coverImage &&
    post.attributes.coverImage.data
      ? `http://localhost:1337${post.attributes.coverImage.data.attributes.url}`
      : noImage; // If cover image data is not available, use noImage as the source

  return (
    <div className="bg-white">
      <div className="px-4 md:px-16 md:py-4">
        <div className="flex flex-col items-center w-full">
          <div className="md:w-[70%]">
            <button
              onClick={goBackHandler}
              className="flex items-center font-light mb-6"
            >
              <img src={backIcon} alt="back" />
              <span className="px-2">Back</span>
            </button>
            <h1 className="font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
              {post.attributes && post.attributes.blogTitle}
            </h1>
            <div className="md:flex justify-between my-8 md:my-12">
              <div>
                <h4 className="text-sm font-semibold mb-1.5">
                  {post.attributes && post.attributes.author}
                </h4>

                <div className="flex items-center text-sm font-light">
                  <span>
                    {post.attributes && post.attributes.publishedDate}
                  </span>

                  <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                  <span>{post.attributes && post.attributes.readTime}</span>
                </div>
              </div>

              <ul className="mt-6">
                <div className="flex  items-center">
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <img src={copyLink} alt="copy" onClick={handleCopyLink} />
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://www.instagram.com/tryhage/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebook} alt="facebook" />
                    </a>
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://x.com/tryhagetoday"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://www.linkedin.com/company/naijawaysglobal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} alt="linkedin" />
                    </a>
                  </li>
                </div>

                {showCopyPopup && (
                  <div className="text-xs text-secondary-200 mt-2">
                    Link copied!
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        <img
          src={imageUrl}
          alt="blog"
          className="w-full md:h-[37.5rem] object-cover object-center"
        />

        <div className="flex justify-center items-center my-12">
          <div className="md:w-[65%]">
            <div className="prose prose-lg">
              <ReactMarkdown>{post.attributes.blogContent}</ReactMarkdown>
            </div>
            <div className="mt-12 md:mt-20">
              <h3 className="text-lg font-semibold">Share this post</h3>

              <ul className="mt-6">
                <div className="flex  items-center">
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <img src={copyLink} alt="copy" onClick={handleCopyLink} />
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://www.instagram.com/tryhage/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebook} alt="facebook" />
                    </a>
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://x.com/tryhagetoday"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://www.linkedin.com/company/naijawaysglobal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} alt="linkedin" />
                    </a>
                  </li>
                </div>

                {showCopyPopup && (
                  <div className="text-xs text-secondary-200 mt-2">
                    Link copied!
                  </div>
                )}
              </ul>
            </div>

            <div className="border-t border-black my-12 md:my-16"></div>

            <div>
              <div>
                <h4 className="text-sm font-semibold mb-1.5">
                  {post.attributes && post.attributes.author}
                </h4>

                <div className="flex items-center text-sm font-light">
                  <span>Job title, Company name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContentFeatures;
