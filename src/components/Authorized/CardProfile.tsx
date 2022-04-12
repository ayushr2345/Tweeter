import React, { FC, useEffect, useState } from "react";
import { Alert, Button, Card, Form, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import IBlog from "../../interfaces/Blog.interface";
import { DeleteABlog, GetUser, UpdateABlog } from "../../services/userService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./Dashboard.css";

type Props = {
  blog: IBlog;
  updateBlogList: () => void;
};

const BlogCardProfile: FC<Props> = ({ blog, updateBlogList }) => {
  const date = new Date();
  const [updatedBlog, setUpdatedBlog] = useState<IBlog>({
    title: "",
    article: "",
    _id: "",
    authorId: "",
    datePublished: date,
  });
  useEffect(() => {
    setUpdatedBlog(blog);
    return () => {
      setUpdatedBlog({
        title: "",
        article: "",
        _id: "",
        authorId: "",
        datePublished: date,
      })// This worked for me
    };
  }, []);
  const [userName, setUserName] = useState<String>("");
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUpdatedBlog(blog);
  };
  const handleShow = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault();
    setShow(true);
  };
  useEffect(() => {
    GetUser(blog).then((res) => {
      setUserName(res.user.name);
    });
    return (
      setUserName("")
    )
  }, [blog]);

  const handleEdit = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    //console.log(updatedBlog);
    await UpdateABlog(updatedBlog).then((e) => {
      setUpdatedBlog(e.updatedBlog);
      handleClose();
      updateBlogList();
    });
  };

  //  DELETE
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShowDelete(true);
  };
  const handleDeleteBlog = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    await DeleteABlog(blog._id).then((e) => {
      //console.log(blog._id);
      //console.log(e);
      handleCloseDelete();
      updateBlogList();
    });
  };

  return (
    <LinkContainer to={"/auth/blog/" + blog._id} >
    <Card className="blog-card-profile">
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">{userName}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted card-date">
            {blog.datePublished.toString().slice(0, 10)}
          </Card.Subtitle>
          <Card.Text className="article-text">
            {blog.article.slice(0, 300) + "..."}
          </Card.Text>
          <EditIcon className="edit-icon" onClick={handleShow} />
          <DeleteIcon className="delete-icon" onClick={handleShowDelete} />

          {/* modal to edit the blog */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={updatedBlog.title}
                    autoFocus
                    onChange={(event) => {
                      const title = event.currentTarget.value;
                      setUpdatedBlog({
                        ...updatedBlog,
                        title: title,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Blog</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    value={updatedBlog.article}
                    onChange={(event) => {
                      const article = event.currentTarget.value;
                      setUpdatedBlog({
                        ...updatedBlog,
                        article: article,
                      });
                    }}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleEdit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal to confirm Deletion */}
          <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title>Deleting Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Alert variant="danger">
                Are you sure you want to delete this blog?
              </Alert>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseDelete}>
                No
              </Button>
              <Button variant="danger" onClick={handleDeleteBlog}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
};

export default BlogCardProfile;
