import React from 'react';

const Blog = () => {
  const blogs = [
    {
      title: "Understanding the Different Types of Visas: A Comprehensive Guide",
      image: "/images/blog1.jpg",
      description: "Explore various types of visas and what each one offers to help you make an informed decision about your travel or immigration plans."
    },
    {
      title: "The Importance of Hiring an Immigration Lawyer",
      image: "/images/blog2.jpg",
      description: "Discover why hiring an immigration lawyer is crucial for navigating the complexities of immigration law and ensuring your application is handled professionally."
    },
    {
      title: "Common Immigration Mistakes to Avoid",
      image: "/images/blog3.jpg",
      description: "Learn about common mistakes made during the immigration process and how to avoid them to increase the chances of your application being successful."
    }
  ];

  return (
    <div className="blogs">
      <div className="container">
        <div className="main-content">
          <h1 className="primary-header">Our Latest Blogs</h1>
          <div className="blog-row">
            {blogs.map((blog, index) => (
              <div className="blog" key={index}>
                <h3 className="blog-title">{blog.title}</h3>
                <img className="blog-img" src={blog.image} alt={`blog${index + 1}.jpg`} />
                <p className="blog-description">{blog.description}</p>
                <a href="#">
                  <button className="learn-more-btn">Learn More</button>
                </a>
              </div>
            ))}
          </div>
          <a href="#">
            <div className="view-btn">
              <button className="learn-more-btn">View All</button>
            </div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .blogs {
          padding: 60px 0;
          background-color: #FFFCED; /* Background color for the entire blog section */
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px;
        }

        .main-content {
          text-align: center;
        }

        .primary-header {
          font-size: 3rem;
          margin-bottom: 30px;
          color: #333;
        }

        .blog-row {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 20px;
        }

        .blog {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 20px;
          overflow: hidden;
        }

        .blog:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
        }

        .blog-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
          transition: color 0.3s ease;
        }

        .blog-title:hover {
          color: #ffcc09;
        }

        .blog-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 15px;
          transition: transform 0.3s ease;
        }

        .blog-img:hover {
          transform: scale(1.05);
        }

        .blog-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .learn-more-btn {
          background-color: #ffcc09;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .learn-more-btn:hover {
          background-color: #e6b800;
        }

        .view-btn {
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .primary-header {
            font-size: 2.5rem;
          }
          .blog-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
