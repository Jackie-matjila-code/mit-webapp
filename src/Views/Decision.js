import React, { useState } from "react";

function Decision() {
  const [decision, setDecision] = useState(null);
  const [error, setError] = useState(null);
  const [model, setModel] = useState({ modelId: "", description: "" });
  const [inputScenario, setInputScenario] = useState({});

  const handleDecisionRequest = async () => {
    //const modelId = "5a8e7a36c627fb0007dd7249e";
    try {
      const response = await fetch(
        `https://api.up2tom.com/v3/decision/${model.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/vnd.api+json",
            Authorization: "Token 9307bfd5fa011428ff198bb37547f979",
          },
          body: JSON.stringify(inputScenario),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setDecision(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setDecision(null);
      setError(error.message);
    }
  };

  const handleModelIdChange = (event) => {
    setModel((prevState) => ({
      ...prevState,
      id: event.target.value,
    }));
  };

  const handleModelDescriptionChange = (event) => {
    setModel((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const handleInputScenarioChange = (event) => {
    const { name, value } = event.target;
    setInputScenario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="mb-3 grid gap-6 mb-6 md:grid-cols-2">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Model ID:
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={model.id}
          onChange={handleModelIdChange}
        />
      </label>
      <br />
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Model Description:
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={model.description}
          onChange={handleModelDescriptionChange}
        />
      </label>
      <br />

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleDecisionRequest}
      >
        Make Decision
      </button>
      {error && <p>Error: {error}</p>}
      {decision && <p>Decision: {JSON.stringify(decision)}</p>}
    </div>
  );
}
export default Decision;
