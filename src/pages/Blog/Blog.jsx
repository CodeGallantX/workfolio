import Navbar from '../../components/Navbar/Navbar';
import MainFooter from '../../components/MainFooter/MainFooter';
import './Blog.css';

const Blog = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='blog-h1'>Our Blog</h1>
        <p className='blog-hp text-center'>Latest articles</p>
      </div>

      <div className="blog-posts text-center">
        No blog posts available at this time
      </div>
      <MainFooter/>
    </>
  );
};

export default Blog;
