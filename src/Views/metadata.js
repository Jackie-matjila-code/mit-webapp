import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ModelDetails() {
  const { id } = useParams();
  const [data, datachange] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const data = await axios.get(`https://api.up2tom.com/v3/models/${id}`, {
        headers: {
          Authorization: "Token 9307bfd5fa011428ff198bb37547f979",
          "content-type": "application/vnd.api+json",
        },
      });

      datachange(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   fetch("https://api.up2tom.com/v3/models/" + id, {
  //     headers: {
  //       Authorization: "Token 9307bfd5fa011428ff198bb37547f979",
  //       "content-type": "application/vnd.api+json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(
  //         res.data.attributes.metadata.attributes.map((row) => {
  //           return row.name;
  //         })
  //       );
  //       datachange(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          {data && (
            <div>
              {data.data.attributes.metadata.attributes.map((row) => {
                // return <div>{row.domain.type}</div>;
                return (
                  <div>
                    {row.question}
                    {row.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default metadata;
