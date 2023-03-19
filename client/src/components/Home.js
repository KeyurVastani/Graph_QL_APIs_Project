import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_QUOTES } from "../gqlOperations/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  console.log("loading===>", loading);
  console.log("error===>", error);
  console.log("data===>", data);
  if (loading) return <h1>Loading ....</h1>;
  if (error) {
    console.log(error.message);
  }
  return (
    <div className="container">
      {data?.quotes.map((singleQuote, index) => {
        return (
          <blockquote key={index}>
            <h6>{singleQuote.name}</h6>
            <p className="right-align">~{singleQuote.createrName}</p>
          </blockquote>
        );
      })}
    </div>
  );
}
