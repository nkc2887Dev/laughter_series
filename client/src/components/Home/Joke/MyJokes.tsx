import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Utils/AxiosInstance";
import { Link } from "react-router-dom";
import { Joke } from "../../../Utils/Interface/jokesInterface";

const MyJokes = () => {
  const [myJokes, setMyJokes] = useState<Joke[]>([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axiosInstance.get("client/jokes/user-list");
      const data = response.data.data;
      setMyJokes(data);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="row d-flex align-items-center justify-content-center mt-4"
        style={{ overflowY: "scroll" }}
      >
        <div
          className="col-md-6"
          style={{ maxHeight: "80vh" }}
        >
          {myJokes.map((joke, index) => {
            return (
              <div
                key={index}
                className="card mb-3"
              >
                <h5 className="card-header">{joke.authorName}</h5>
                <div className="card-body">
                  <h5 className="card-title">{joke.title}</h5>
                  <p className="card-text">{joke.content}</p>
                  <Link
                    to=""
                    className="btn btn-primary"
                    //   onClick={() => getLikesData(joke._id, STATUS.LIKE)}
                  >
                    Like {joke.likes}
                  </Link>
                  <Link
                    to=""
                    className="btn btn-primary ml-3"
                    //   onClick={() => getLikesData(joke._id, STATUS.DISLIKE)}
                  >
                    Dislike {joke.dislikes}
                  </Link>
                  <Link
                    to=""
                    className="btn btn-primary ml-3"
                    //   onClick={() => handleCommentClick(joke._id)}
                  >
                    Comment
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyJokes;
