import { useEffect, useState } from "react";
import Cube from "../Cube/Cube.js";
import "./CubeMatrix.css";
import Character from "../Character/Character.js";

export default function CubeMatrix({ rows }) {
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

      if (r > 0 && !maze[r - 1][c].visited)
        neighbors.push({ r: r - 1, c });

      if (c < n - 1 && !maze[r][c + 1].visited)
        neighbors.push({ r, c: c + 1 });

      if (r < n - 1 && !maze[r + 1][c].visited)
        neighbors.push({ r: r + 1, c });

      if (c > 0 && !maze[r][c - 1].visited)
        neighbors.push({ r, c: c - 1 });

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

    return matrix;
  }

  const [cubes, setCubes] = useState([]);
  const [maze, setMaze] = useState(generateMazeMatrix(4));

  const CreateMatrix = () => {
    const cubesc = [];

    for (let i = rows; i > 0; i--) {
      for (let j = 0; j < rows; j++) {
        cubesc.push(
          <Cube
            key={`${i}-${j}`}
            top={-54 * i + 54 * j}
            left={70 * i + 70 * j}
            type="down"
            i={i}
            j={j}
          />
        );
      }
    }

    for (let i = maze.length - 1; i >= 0; i--) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 1) {
          const up = maze[i - 1]?.[j];
          const down = maze[i + 1]?.[j];
          const left = maze[i]?.[j - 1];
          const right = maze[i]?.[j + 1];

          if (down === 1 && right === 1 && left === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="cross-r"
              />
            );
          } else if (up === 1 && down === 1 && right === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="cross-d"
              />
            );
          } else if (up === 1 && left === 1 && right === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="cross-l"
              />
            );
          } else if (up === 1 && left === 1 && down === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="cross-u"
              />
            );
          } else if (up === 1 && right === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="edge-dl"
              />
            );
          } else if (up === 1 && left === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="edge-ul"
              />
            );
          } else if (down === 1 && left === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="edge-ur"
              />
            );
          } else if (down === 1 && right === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="edge-dr"
              />
            );
          } else if (up === 1 || down === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="horizontal"
              />
            );
          } else if (left === 1 || right === 1) {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="vertical"
              />
            );
          } else {
            cubesc.push(
              <Cube
                key={`k${i}-${j}`}
                top={-54 * i + 54 * j - 118}
                left={70 * (i + 1) + 70 * j}
                type="none"
              />
            );
          }
        }
      }
    }

    setCubes(cubesc);
  };

  useEffect(() => {
    // setMaze(generateMazeMatrix(4));
    CreateMatrix();
  }, []);

  return <div className="cube-matrix">
    {cubes}
    <Character/>
    </div>;
}