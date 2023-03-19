import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const users = await fetch("http://localhost:4000/s", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          query: `query IndividualQuote($by: ID!) {
            individualQuote(by: $by) {
              by
              createrName
              name
            }
          }`,
          variables: {
            by: "6402e5b10e5539553591eeb6",
          },
        }),
      });

      const data = await users.json();
      console.log("usersa=====>", data);
    })();
    // fetch("http://localhost:4000/", {
    //   method: "post",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: `query getAllQuotes {
    //       quotes {
    //         by
    //         createrName
    //         name
    //       }
    //     }`,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data=====>", data);
    //   });
  }, []);

  return (
    <div className="container">
      <blockquote>
        <h6>if it works dont touch it</h6>
        <p className="right-align">~ram</p>
      </blockquote>
      <blockquote>
        <h6>if it works dont touch it</h6>
        <p className="right-align">~ram</p>
      </blockquote>
    </div>
  );
}
