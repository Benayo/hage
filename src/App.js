import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Homepage from "./pages/home/Homepage";
import Manufacturers from "./pages/marketplace/Manufacturers";
import Transporters from "./pages/marketplace/Transporters";
import Inland from "./pages/ourservice/Inland";
import Freight from "./pages/ourservice/Freight";
import RailCargo from "./pages/ourservice/RailCargo";
import Company from "./pages/company/Company";
import BlogPost from "./pages/blog/BlogPost";
import BlogPostContent from "./pages/blog/BlogPostContent";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";
import Crossborder from "./pages/ourservice/Crossborder";
import blogimage from "./assests/blog-image.png";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  // const { data } = useFetch("http://localhost:1337/api/blogs?populate=*");

  const data = {
    data: [
      {
        id: 1,
        attributes: {
          blogTitle: "How we solve logistic problems for drivers",
          blogSummary: "Learn how drivers overcome logistics challenges with our solutions.",
          author: "Lekan Omotosho",
          publishedDate: "11 May 2024",
          readTime: "5 min read",
          coverImage: {
            data: {
              attributes: {
                url: blogimage,
              },
            },
          },
        },
      },
      {
        id: 2,
        attributes: {
          blogTitle: "How we solve logistic problems for fleet owners",
          blogSummary: "Discover strategies for fleet owners to improve logistics.",
          author: "Lekan Omotosho",
          publishedDate: "12 May 2024",
          readTime: "6 min read",
          coverImage: {
            data: {
              attributes: {
                url: blogimage,
              },
            },
          },
        },
      },
      {
        id: 3,
        attributes: {
          blogTitle: "How we solve logistic problems for distributors",
          blogSummary: "Distributors can streamline their supply chain with our solutions.",
          author: "Lekan Omotosho",
          publishedDate: "13 May 2024",
          readTime: "5 min read",
          coverImage: {
            data: {
              attributes: {
                url: blogimage,
              },
            },
          },
        },
      },
      {
        id: 4,
        attributes: {
          blogTitle: "The future of logistics and AI",
          blogSummary: "How AI is transforming the logistics industry.",
          author: "Lekan Omotosho",
          publishedDate: "14 May 2024",
          readTime: "7 min read",
          coverImage: {
            data: {
              attributes: {
                url: blogimage,
              },
            },
          },
        },
      },
      {
        id: 5,
        attributes: {
          blogTitle: "How to optimize supply chain management",
          blogSummary: "Practical tips for improving supply chain efficiency.",
          author: "Lekan Omotosho",
          publishedDate: "15 May 2024",
          readTime: "6 min read",
          coverImage: {
            data: {
              attributes: {
                url: blogimage,
              },
            },
          },
        },
      },
    ],
  };
  
  
  return (
    <Router>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/marketplace/manufacturers"
            element={<Manufacturers />}
          />

          <Route path="/marketplace/transporters" element={<Transporters />} />

          <Route path="/service/inland" element={<Inland />} />
          
          <Route path="/service/cross-border" element={<Crossborder />} />

          <Route path="/service/freight" element={<Freight />} />

          <Route path="/service/railcargo" element={<RailCargo />} />

          <Route path="/company" element={<Company />} />

          <Route path="/blog" element={<BlogPost posts={data} />} />

          <Route
            path="/blogpost/:id"
            element={<BlogPostContent posts={data} />}
          />

          <Route path="*" element={<Homepage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
