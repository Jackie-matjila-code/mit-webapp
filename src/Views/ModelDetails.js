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
                    <div className="flex flex-col p-5">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <form>
                              <label>
                                <p></p>
                                <input
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  type="text"
                                  name="inp_title"
                                  value={row.domain.type}
                                />
                              </label>
                              <label>
                                <p></p>
                                <input
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  type="text"
                                  name="inp_title"
                                  value={row.question}
                                />
                              </label>
                              <label>
                                <p></p>
                                <input
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  type="text"
                                  name="inp_title"
                                  value={row.name}
                                />
                              </label>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ModelDetails;
