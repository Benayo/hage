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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { data } = useFetch("http://localhost:1337/api/blogs?populate=*");

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
