import type { Point } from "./SnakeGame.types";

export const COLORS = {
  fieldA: "#797878ff",
  fieldB: "#474646ff",
  snakeHead: "#ffe066",
  snakeBody: "#ffd43b",
  food: "#ff0000",
};

export const DIRS: Record<string, Point> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};
