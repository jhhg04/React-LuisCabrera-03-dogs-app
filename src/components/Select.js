import React, { useEffect, useState } from "react";
import getData from "../helpers/getData";
import Error from "./Error";

const initialBreeds = [
  { id: 1, name: "Boxer" },
  { id: 2, name: "PitBull" },
];
const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getData()
      .then((newBreeds) => {
        setBreeds(newBreeds);
      })
      .catch((error) => {
        console.log(error);
        setError("Error loading breeds");
      });
  };

  return (
    <>
      <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      {error && <Error error={error} />}
    </>
  );
};

export default Select;
