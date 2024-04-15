import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Utils/AxiosInstance";
import { Link } from "react-router-dom";
import { Joke } from "../../../Utils/Interface/jokesInterface";

const ListJoke = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axiosInstance.get("client/jokes/list");
      const data = response.data.data;
      setJokes(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {jokes.map((joke, index) => {
        return (
          <div
            key={index}
            className="row d-flex align-items-center justify-content-center mt-5 w-100"
          >
            <div className="card col-md-6">
              <h5 className="card-header">{joke.authorName}</h5>
              <div className="card-body">
                <h5 className="card-title">{joke.title}</h5>
                <p className="card-text">{joke.content}</p>
                <Link
                  to="update"
                  className="btn btn-primary"
                >
                  Like
                </Link>
                <Link
                  to="update"
                  className="btn btn-primary ml-3"
                >
                  Dislike
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListJoke;
