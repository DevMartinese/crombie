import React, { useEffect, useState } from "react";

const FruitsVotes = ({ fruits }) => {

  const [fruit, setFruit] = useState([]);

  useEffect(() => {
    setFruit(fruits);
  }, [fruits]);

  const incrementVote = (fruit) => {
    setFruit(
      fruits.map(f => {
        if (f.name === fruit.name) {
          return {
            ...f,
            votes: f.votes += 1
          }
        }
        return f;
      })
    )
  }

  const decrementVote = (fruit) => {
    setFruit(
      fruits.map(f => {
        if (f.name === fruit.name) {
          return {
            ...f,
            votes: f.votes -= 1
          }
        }
        return f;
      })
    )
  }

  return (
    <div>
      {fruit.map((fruit, index) => (
        <div key={index}>
          <span>{fruit.name}</span> <span>votes: {fruit.votes}</span> <button onClick={() => incrementVote(fruit)}>+</button> <button onClick={() => decrementVote(fruit)}>-</button>
        </div>
      ))}
    </div>
  )
}

export default FruitsVotes;