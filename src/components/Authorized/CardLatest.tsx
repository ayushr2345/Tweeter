import React, { FC, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import IBlog from "../../interfaces/Blog.interface";
import { GetUser } from "../../services/userService";
import "./Dashboard.css";

type Props = {
  blog: IBlog;
};

const BlogCardLatest: FC<Props> = ({ blog }) => {
  const [userName, setUserName] = useState<String>("");
  useEffect(() => {
    async function fetch() {
      await GetUser(blog).then((res) => {
        setUserName(res.user.name);
        // console.log(res.user.name);
      });
    }
    fetch();
    return (
      setUserName("")
    )
  }, []);

  return (
    <LinkContainer to={"/auth/blog/" + blog._id} >
    <Card className="blog-card-latest">
        <Card.Body>
          <Card.Title className="latest">{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted latest">
            {userName}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted card-date latest">
            {blog.datePublished.toString().slice(0, 10)}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
};

export default BlogCardLatest;
