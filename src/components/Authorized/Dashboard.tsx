import React, { useEffect, useState } from "react";
import BlogCard from "./Card";
import IBlog from "../../interfaces/Blog.interface";
import { Button, Form } from "react-bootstrap";
import { AddBlog, GetAllBlogs, logOutUser } from "../../services/userService";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import IUser from "../../interfaces/User.interface";
import BlogCardLatest from "./CardLatest";
import { LinkContainer } from "react-router-bootstrap";

type Blog = {
  _id: String;
  authorId: String;
  title: string;
  article: string;
  datePublished: Date;
};

//const Dashboard: FC<Partial<IUser>> = (user: Partial<IUser>) => {
function Dashboard() {
  const date = new Date();
  const navigate = useNavigate();
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
  const [blogList, setBlogList] = useState<Blog[]>([]);

  const newUser = useOutletContext<{ user: Partial<IUser> }>().user;
  useEffect(() => {
    if (newUser) {
      setUser(newUser);
      GetAllBlogs().then((e) => {
        setBlogList(e);
      });
    }
    return (
      setBlogList([])
    )
  }, [user]);

  //console.log(blogList);
  const validateForm = () => {
    if (blog.article.length > 0 && blog.title.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm()) {
      await AddBlog(blog).then(() => {
        setBlog({
          title: "",
          article: "",
          _id: "",
          authorId: "",
          datePublished: date,
        });
      });
      GetAllBlogs().then((e) => {
        setBlogList(e);
      });
    } else {
      navigate("/Tweeter/");
    }
  };
  let i = 0;
  return (
    <div className="blogs">
      {/* Create a Blog */}
      <Form id="create-blog">
        <Form.Label className="heading">Post a new Article</Form.Label>
        <Form.Group className="mb-3" controlId="title">
          <Form.Control
            required
            name="title"
            value={blog.title}
            type="text"
            placeholder="Title"
            onChange={(event) => {
              const title = event.currentTarget.value;
              setBlog({
                ...blog,
                title: title,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="article" >
            <Form.Control
              required
              name="article"
              value={blog.article}
              as="textarea"
              rows={5}
              placeholder="Sart typing"
              onChange={(event) => {
                const article = event.currentTarget.value;
                setBlog({
                  ...blog,
                  article: article,
                });
              }}
            />
        </Form.Group>

        <div className="buttons">
          <Button
            onClick={() => {
              setBlog({
                title: "",
                article: "",
                _id: "",
                authorId: "",
                datePublished: date,
              });
            }}
            variant="danger"
            type="submit"
            className="button-form-reset"
          >
            Reset
          </Button>
          <Button
            disabled={!validateForm()}
            onClick={handleSubmit}
            variant="outline-dark"
            type="submit"
            className="button-form-submit"
          >
            Post
          </Button>
        </div>
      </Form>

      {blogList.length == 0 ? (
        <></>
      ) : (
        <div className="break-form">----- ALL BLOGS ----</div>
      )}
      {/* ALL BLOGS */}
      <div className="all-blogs">
        {blogList.map((blog: IBlog, _id) => {
          return <BlogCard blog={blog} key={_id} />;
        })}
        <div className="break">That's it for now</div>
      </div>

      {/* PROFILE */}

      <div className="user">
        <div className="image-section">
          {user.profileImage && (
            <img
              className="profile-image"
              src={`${user.profileImage}`}
              alt="avatar"
              width="128"
              height="128"
            />
          )}
        </div>
        <div className="user-name">{user.name}</div>
        <br />
        <div className="user-email">
          {user.email}
          <br />
          <div className="user-bio">{user.bio}</div>
          <LinkContainer className="goto-profile" to="/auth/profile">
            <a>Go to Profile</a>
          </LinkContainer>
        </div>
        <br />

        <b>Latest Blogs</b>
        <div>
          {blogList.map((blog: IBlog, _id) => {
            if (blog.authorId != user._id && i < 3) {
              i++;
              return <BlogCardLatest blog={blog} key={_id} />;
            }
          })}
        </div>
        <br />
        <Button
          className="logout-button button-form"
          variant="outline-danger"
          size="sm"
          onClick={async () => {
            await logOutUser();
            navigate("/");
          }}
        >
          Log Out
        </Button>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
