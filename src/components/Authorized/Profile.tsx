import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useOutletContext } from "react-router-dom";
import IBlog from "../../interfaces/Blog.interface";
import IUser from "../../interfaces/User.interface";
import {
  DeleteALLBlogs,
  DeleteUser,
  GetAllBlogs,
  UpdateProfileImage,
  UpdateUser,
} from "../../services/userService";
import BlogCardProfile from "./CardProfile";
import EditIcon from "@mui/icons-material/Edit";
import "./Profile.css";

type Blog = {
  _id: String;
  authorId: String;
  title: string;
  article: string;
  datePublished: Date;
  profileImage: string;
};

function Profile() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [user, setUser] = useState<Partial<IUser>>({
    name: "",
    email: "",
    bio: "",
  });
  const [updatedUser, setUpdatedUser] = useState<Partial<IUser>>({
    name: "",
    email: "",
    bio: "",
  });

  const [blogList, setBlogList] = useState<Blog[]>([]);

  const newUser = useOutletContext<{ user: Partial<IUser> }>().user;
  const getUpdatedUser = useOutletContext<{ getUpdatedUser: () => void }>()
    .getUpdatedUser;

  useEffect(() => {
    if (newUser) {
      setUser(newUser);
      // if (newUser.profileImage) {
      //   var x = new Buffer(newUser.profileImage.data).toString("base64");
      //   setImage(x);
      // }
      GetAllBlogs().then((e) => {
        setBlogList(e);
        setUpdatedUser(newUser);
      });
    }
  }, [newUser]);

  const updateBlogList = () => {
    GetAllBlogs().then((e) => {
      setBlogList(e);
    });
  };

  const handleUpdateAccount = async () => {
    await UpdateUser(updatedUser).then((e) => {
      console.log(e);
    });

    getUpdatedUser();
    handleCloseAccountEdit();
  };

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUpdateProfileImage = async (event: any) => {
    event.preventDefault();
    if (event.target.files[0]) {
      const uploadFile = event.target.files[0];
      const base64 = await convertToBase64(uploadFile);
      // console.log(base64);

      await UpdateProfileImage(base64).then((e) => {
        //console.log(e);
      });
      getUpdatedUser();
    }
  };

  // ACCOUNT DELETE
  const [showAccountDelete, setShowAccountDelete] = useState(false);
  const [showAccountEdit, setShowAccountEdit] = useState(false);
  const handleCloseAccountDelete = () => setShowAccountDelete(false);
  const handleShowAccountDelete = () => setShowAccountDelete(true);

  const handleCloseAccountEdit = () => {
    setShowAccountEdit(false);
    setUpdatedUser(newUser);
  };

  const handleShowAccountEdit = () => setShowAccountEdit(true);

  const handleAccountDelete = async () => {
    handleCloseAccountDelete();
    navigate("/Tweeter");
    await DeleteALLBlogs(user);
    await DeleteUser(user);
  };

  return (
    <div>
      {/* PROFILE */}
      <div className="profile">
        <div>
          <div className="image-section-profile">
            {user.profileImage && (
              <img
                className="profile-image-profile"
                src={`${user.profileImage}`}
                alt="avatar"
                width="256"
                height="256"
              />
            )}

            <label htmlFor="file">
              <input
                type="file"
                className="hidden-form-image"
                id="file"
                onChange={handleUpdateProfileImage}
              />

              <EditIcon className="edit-profile-image" />
            </label>
          </div>
          {/* </EditIcon> */}
        </div>
        <div className="user-name">{updatedUser.name}</div>
        <br />
        <div className="user-email">
          {updatedUser.email} <br />
          <div className="user-bio">{user.bio}</div>
          <LinkContainer className="goto-dashboard" to="/Tweeter/auth/dashboard/">
            <a>Go to Dashboard</a>
          </LinkContainer>
        </div>
        <br />

        {/* EDIT ACCOUNT SECTION */}
        <Button
          variant="primary"
          className="edit-profile-button"
          onClick={handleShowAccountEdit}
        >
          Update Profile
        </Button>
        {/* Modal to Edit Profile */}
        <Modal show={showAccountEdit} onHide={handleCloseAccountEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Updating Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert variant="warning">
              You cannot update NAME, EMAIL or DOB once it is set!
            </Alert>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={user.name} disabled={true} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={user.email} disabled={true} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={updatedUser.bio}
                  placeholder="Write a bio"
                  onChange={(event) => {
                    const bio = event.currentTarget.value;
                    setUpdatedUser({
                      ...updatedUser,
                      bio: bio,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={user.dob ? user.dob.slice(0, 10) : user.dob}
                  disabled={user.dob ? true : false}
                  onChange={(event) => {
                    const dob = event.currentTarget.value;
                    setUpdatedUser({
                      ...updatedUser,
                      dob: dob,
                    });
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseAccountEdit}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpdateAccount}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <br />
        {/* DELETE ACCOUNT SECTION */}
        <Button
          variant="outline-danger"
          className="delete-profile-button"
          onClick={handleShowAccountDelete}
        >
          Delete Profile
        </Button>

        {/* Modal to confirm Deletion */}
        <Modal show={showAccountDelete} onHide={handleCloseAccountDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Deleting Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert variant="danger">
              Are you sure you want to delete the profile?
            </Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseAccountDelete}>
              No
            </Button>
            <Button variant="danger" onClick={handleAccountDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="my-blogs">
        <div className="break-form">----- MY BLOGS ----</div>
        <div>
          {blogList.map((blog: IBlog, _id) => {
            if (blog.authorId === user._id) {
              return (
                <BlogCardProfile
                  blog={blog}
                  updateBlogList={updateBlogList}
                  key={_id}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
