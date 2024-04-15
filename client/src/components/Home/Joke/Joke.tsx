import React, { useEffect, useState } from "react";
import { JOKES_CATEGORY } from "../../../Constant/constant";
import axiosInstance from "../../../Utils/AxiosInstance";
import { useNavigate } from "react-router-dom";

const Joke = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axiosInstance
      .get("client/user/profile")
      .then((res) => {
        const user = res.data.data;
        setAuthor(user._id);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, []);

  const handleJokes = async () => {
    try {
      if (title === "" || content === "" || category === "") {
        setErrorMessage("Please add some usefulll content");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }

      const resposne = await axiosInstance.post("client/jokes/add", {
        title,
        content,
        category,
        author,
      });
      if (resposne.data) {
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center p-5 m-5"
      style={{ backgroundColor: "rgba(40, 167, 69, 0.5)" }}
    >
      <div className="container m-5 p-5 w-100">
        <form>
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          <div className="form-group">
            <label htmlFor="">Enter Jokes Title : </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Enter Jokes Content : </label>
            <input
              type="text"
              className="form-control"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Select Jokes Category : </label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select</option>
              <option>{JOKES_CATEGORY.ANIMAL}</option>
              <option>{JOKES_CATEGORY.BLONDE}</option>
              <option>{JOKES_CATEGORY.CLEAN}</option>
              <option>{JOKES_CATEGORY.DIRTY}</option>
              <option>{JOKES_CATEGORY.DRAK}</option>
              <option>{JOKES_CATEGORY.INSULT}</option>
              <option>{JOKES_CATEGORY.KNOCK_KNOCK}</option>
              <option>{JOKES_CATEGORY.ONE_LINER}</option>
              <option>{JOKES_CATEGORY.POLITICAL}</option>
              <option>{JOKES_CATEGORY.PUN}</option>
              <option>{JOKES_CATEGORY.RIDDLE}</option>
              <option>{JOKES_CATEGORY.OTHER}</option>
            </select>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleJokes}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Joke;
