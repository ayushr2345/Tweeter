import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import IBlog from "../../interfaces/Blog.interface";
import IUser from "../../interfaces/User.interface";
import { GetABlog, GetUser } from "../../services/userService";

type Blog = {
  _id: String;
  authorId: String;
  title: string;
  article: string;
  datePublished: Date;
};

function Blog() {
  let { id } = useParams();
  const date = new Date();
  const [blog, setBlog] = useState<Blog>({
    title: "",
    article: "",
    _id: "",
    authorId: "",
    datePublished: date,
  });
  const [user, setUser] = useState<Partial<IUser>>({
    name: "",
    email: "",
  });
  useEffect(() => {
    
    async function fetch() {
      if (id && blog.title.length == 0) {
        await GetABlog(id).then((res) => {
          console.log(res[0].title.length);
          setBlog(res[0]);
          // console.log(blog);
        });
      }
      if (blog.title.length > 0) {
        await GetUser(blog).then((res) => {
          setUser(res.user);
        });
      }
    }
    fetch();
    return (
      setUser({}),
      setBlog({
        title: "",
        article: "",
        _id: "",
        authorId: "",
        datePublished: date,
      })
    )
  }, [blog]);

  // useEffect(() => {
  //   console.log("here2")
  //   if (id) {
  //     GetABlog(id).then((res) => {
  //       //   console.log(res);
  //       setBlog(res[0]);
  //       // console.log(blog);
  //     });
  //   }
  //   return (
  //     setBlog({
  //       title: "",
  //       article: "",
  //       _id: "",
  //       authorId: "",
  //       datePublished: date,
  //     })
  //   )
  // }, []);

  return (
    <div>
      <Card className="blog-card-blog-page">
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted card-date">
            {blog.datePublished.toString().slice(0, 10)}
          </Card.Subtitle>
          <div className="image-section">
            {user.profileImage && (
              <img
                className="profile-image-blog"
                src={`${user.profileImage}`}
                alt="avatar"
                width="128"
                height="128"
              />
            )}
          </div>
          <Card.Text className="article-text" style={{ whiteSpace: "pre-wrap", }}>{blog.article}</Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
}

export default Blog;
