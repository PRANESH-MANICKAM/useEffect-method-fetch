import React, { useState, useEffect } from "react";
import axios from "axios";
const Fetch = () => {
  const [source, setSource] = useState([]);
  const fetchdata = async () => {
    try {
      let result = await axios.get("https://fakestoreapi.com/users");
      setSource(result.data[0]);
    } catch (error) {
      console.log("error in api call", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log("pranesh", source);
  return (
    <div>
      <div className="container">
        <div className="datas">
          <p>Name: {source.username}</p>
          <br />
          <p>Email: {source.email}</p>
          <br />
          <p>id: {source.id}</p>
          <br />
          <p>Phone: {source.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
