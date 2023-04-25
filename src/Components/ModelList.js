import React, { useEffect, useState } from "react";

import axios from "axios";
import "../tailwind.css";
import { Link, useNavigate } from "react-router-dom";

const ModelList = () => {
  const [empdata, setEmpdata] = useState([]);
  const navigate = useNavigate();
  const LoadDetail = (id) => {
    navigate("/model/details/" + id);
  };
  const LoadEdit = (id) => {
    //navigate("/model/edit/" + id);
    if (
      window.confirm(
        "Sorry I havent implemented this method yet? Hire me I will do it, with pleasure"
      )
    ) {
      alert(
        "I mean I was able to learn React and produce this prototype in 2 days, Imagine if you permanently hire me"
      );
    }
  };
  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`https://api.up2tom.com/v3/models/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Token 9307bfd5fa011428ff198bb37547f979",
          "content-type": "application/vnd.api+json",
        },
      })
        .then((response) => {
          alert("Removed successfully");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getData = async () => {
    try {
      const data = await axios.get("https://api.up2tom.com/v3/models", {
        headers: {
          Authorization: "Token 9307bfd5fa011428ff198bb37547f979",
          "content-type": "application/vnd.api+json",
        },
      });

      if (data.status === 200) {
        setEmpdata(data.data.data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col p-5">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <Link
              to="/model/create"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create
            </Link>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Publisher
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {empdata &&
                  empdata.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {item.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.type}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.attributes.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.attributes.description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.attributes.publisher}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={() => {
                            LoadEdit(item.id);
                          }}
                          type="button"
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            LoadDetail(item.id);
                          }}
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => {
                            RemoveFunction(item.id);
                          }}
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelList;
