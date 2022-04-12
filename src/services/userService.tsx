import axios from "axios";
import IBlog from "../interfaces/Blog.interface";
import IUser from "../interfaces/User.interface";
const USERS_API_URL = "https://blogs-app-shramey.herokuapp.com";
// const USERS_API_URL = "http://localhost:5000"
axios.defaults.withCredentials = true;

/*
 ********** USERS **********
 */

// SIGNUP
export const addUser = async (newUser: Partial<IUser>) => {
  try {
    const response = await axios.post(USERS_API_URL + "/auth/signup", newUser, {
      withCredentials: true,
    });
    // localStorage.setItem("_id", response.data.user._id);
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.error(err);
  }
};

// LOGIN
export const logInUser = async (logInUser: Partial<IUser>) => {
  try {
    const response = await axios.post(
      USERS_API_URL + "/auth/login",
      logInUser,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.error(err);
  }
};

// LOGOUT
export const logOutUser = async () => {
  try {
    const response = await axios.get(USERS_API_URL + "/auth/logout");
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.error(err);
  }
};

// MATCH A SESSION
export const MatchAUserSession = async () => {
  try {
    const response = await axios.get(USERS_API_URL + "/auth/session");
    // if (!response.data.user) {
    //   // console.log(response)
    //   logOutUser();
    // }
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.error(err);
  }
};

// GET A USER TO DISPLAY IN THE BLOG CARD
export const GetUser = async (blog: Partial<IBlog>) => {
  try {
    const response = await axios.post(USERS_API_URL + "/auth/get-name", { data: { blog: blog } }, { withCredentials: true });
    console.log(response)
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

// UPDATE A USER
export const UpdateUser = async (user: Partial<IUser>) => {
  try {
    const response = await axios.put(
      USERS_API_URL + "/auth/update",
      {
        data: {
          user: user,
        },
      },
      { withCredentials: true }
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

// UPDATE PROFILE IMAGE
export const UpdateProfileImage = async (image: unknown) => {
  try {
    // console.log(form.get("file"));
    const response = await axios.post(
      USERS_API_URL + "/auth/update-profile-image",
      { image: image }
    );
    //console.log(response);
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

// DELETE A USER
export const DeleteUser = async (user: Partial<IUser>) => {
  try {
    logOutUser();

    const response = await axios.delete(USERS_API_URL + "/auth/delete", {
      data: user,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

/*
 ********** BLOGS **********
 */

// ADD A BLOG
export const AddBlog = async (blog: Partial<IBlog>) => {
  try {
    const response = await axios.post(USERS_API_URL + "/auth/blog/add", blog, {
      withCredentials: true,
    });
    //console.log(response);
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

// GET ALL BLOGS
export const GetAllBlogs = async () => {
  try {
    const response = await axios.get(USERS_API_URL + "/auth/blog/get-all");
    //console.log(response.data.blogs);
    return response.data.blogs;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

// GET A BLOG
export const GetABlog = async (id: String) => {
  try {
    const response = await axios.post(
      USERS_API_URL + "/auth/blog/get-one",
      { id: id },
      { withCredentials: true }
    );
    //console.log(response.data);
    return response.data.blogs;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

// UPDATE A BLOG
export const UpdateABlog = async (blog: Partial<IBlog>) => {
  try {
    const response = await axios.put(
      USERS_API_URL + "/auth/blog/update",
      {
        blog: blog,
      },
      { withCredentials: true }
    );
    //console.log(response);
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

// DELETE A BLOG
export const DeleteABlog = async (id: String) => {
  try {
    const response = await axios.delete(USERS_API_URL + "/auth/blog/delete", {
      data: {
        id: id,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};

// DELETE ALL BLOG
export const DeleteALLBlogs = async (user: Partial<IUser>) => {
  try {
    const response = await axios.delete(
      USERS_API_URL + "/auth/blog/delete-all",
      {
        data: {
          user: user,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(USERS_API_URL);
    console.log(err);
  }
};
