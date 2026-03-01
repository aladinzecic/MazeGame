import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";



export default function Matrix() {
    const {setMatrix}=useContext(AppContext)

  const [inputSize, setInputSize] = useState(4);
  const [maze, setMaze] = useState(generateMazeMatrix(8));
function generateMazeMatrix(n) {
  const maze = Array(n)
    .fill()
    .map(() =>
      Array(n)
        .fill()
        .map(() => ({
          top: true,
          right: true,
          bottom: true,
          left: true,
          visited: false,
        }))
    );

  function getNeighbors(r, c) {
    const neighbors = [];
    if (r > 0 && !maze[r - 1][c].visited) neighbors.push({ r: r - 1, c });
    if (c < n - 1 && !maze[r][c + 1].visited) neighbors.push({ r, c: c + 1 });
    if (r < n - 1 && !maze[r + 1][c].visited) neighbors.push({ r: r + 1, c });
    if (c > 0 && !maze[r][c - 1].visited) neighbors.push({ r, c: c - 1 });
    return neighbors;
  }

  function removeWalls(current, next) {
    const dx = current.c - next.c;
    const dy = current.r - next.r;

    if (dx === 1) {
      maze[current.r][current.c].left = false;
      maze[next.r][next.c].right = false;
    } else if (dx === -1) {
      maze[current.r][current.c].right = false;
      maze[next.r][next.c].left = false;
    }

    if (dy === 1) {
      maze[current.r][current.c].top = false;
      maze[next.r][next.c].bottom = false;
    } else if (dy === -1) {
      maze[current.r][current.c].bottom = false;
      maze[next.r][next.c].top = false;
    }
  }

  function dfs(r, c) {
    maze[r][c].visited = true;
    const neighbors = getNeighbors(r, c);

    while (neighbors.length) {
      const randIndex = Math.floor(Math.random() * neighbors.length);
      const next = neighbors.splice(randIndex, 1)[0];

      if (!maze[next.r][next.c].visited) {
        removeWalls({ r, c }, next);
        dfs(next.r, next.c);
      }
    }
  }

  dfs(0, 0);

  const size = n * 2 + 1;
  const matrix = Array(size)
    .fill()
    .map(() => Array(size).fill(1));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const mr = r * 2 + 1;
      const mc = c * 2 + 1;

      matrix[mr][mc] = 0;

      if (!maze[r][c].top) matrix[mr - 1][mc] = 0;
      if (!maze[r][c].right) matrix[mr][mc + 1] = 0;
      if (!maze[r][c].bottom) matrix[mr + 1][mc] = 0;
      if (!maze[r][c].left) matrix[mr][mc - 1] = 0;
    }
  }

  // ulaz i izlaz
  matrix[1][0] = 0;
  matrix[size - 2][size - 1] = 0;
  setMatrix(matrix)
  return matrix;
}
  const handleGenerate = () => {
    setMaze(generateMazeMatrix(inputSize));
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Maze Matrix Generator</h2>

      <input
        type="number"
        value={inputSize}
        min="2"
        max="30"
        onChange={(e) => setInputSize(Number(e.target.value))}
      />
      <button onClick={handleGenerate} style={{ marginLeft: 10 }}>
        Generate
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${maze.length}, 20px)`,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {maze.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              style={{
                width: 20,
                height: 20,
                backgroundColor: cell === 1 ? "black" : "white",
              }}
            />
          ))
        )}
      </div>

      <pre style={{ marginTop: 20, textAlign: "left" }}>
        {JSON.stringify(maze, null, 2)}
      </pre>
    </div>
  );
}