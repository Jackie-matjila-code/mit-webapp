import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
function DrinkModel() {
  const [empdata, setEmpdata] = useState([]);
  //const { id } = useParams();
  //const url = `https://api.up2tom.com/v3/${id}`;
  const url = `https://api.up2tom.com/v3/models`;
  const getData = async () => {
    try {
      const data = await axios.get(url, {
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
  });

  return (
    <div className="flex flex-col p-5">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {empdata &&
              empdata.map((item) => (
                <form key={item.id}>
                  <label>
                    <p>Title</p>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      name="inp_title"
                      value={item.id}
                    />
                  </label>
                </form>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DrinkModel;
