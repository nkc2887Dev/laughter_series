import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Utils/AxiosInstance";
import { Link } from "react-router-dom";
import { Joke } from "../../../Utils/Interface/jokesInterface";
import { STATUS } from "../../../Constant/constant";

const ListJoke = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [userId, setUserId] = useState("");

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axiosInstance.get("client/jokes/list");
      const data = response.data.data;
      setJokes(data);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axiosInstance
      .get("client/user/profile")
      .then((res) => {
        const user = res.data.data;
        setUserId(user._id);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, []);

  const updateLikes = async (jokeId: string, status: string) => {
    try {
      await axiosInstance.post(`client/jokes/like-dislike/${jokeId}`, {
        status: status,
        userId: userId,
      });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentClick = async (jokeId: string) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

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
          {jokes.map((joke, index) => {
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
                    to="/home"
                    className="btn btn-primary"
                    onClick={() => updateLikes(joke._id, STATUS.LIKE)}
                  >
                    Like {joke.likes}
                  </Link>
                  <Link
                    to="/home"
                    className="btn btn-primary ml-3"
                    onClick={() => updateLikes(joke._id, STATUS.DISLIKE)}
                  >
                    Dislike {joke.dislikes}
                  </Link>
                  <Link
                    to="/home"
                    className="btn btn-primary ml-3"
                    onClick={() => handleCommentClick(joke._id)}
                  >
                    Comment
                  </Link>
                  {/* <div>
                    <h6>Comments:</h6>
                    {joke.comments && joke.comments.map((comment, commentIndex) => <p key={commentIndex}>{"comment"}</p>)}
                    {showCommentInput && joke._id === currentJokeId && (
                      <div>
                        <input
                          type="text"
                          value={newComment}
                          onChange={handleCommentChange}
                        />
                        <button
                          className="btn btn-primary ml-2"
                          onClick={() => addComment(joke._id)}
                        >
                          Add Comment
                        </button>
                      </div>
                    )}
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListJoke;
