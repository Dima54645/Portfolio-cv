import type { Point } from "./SnakeGame.types";

export const COLORS = {
  fieldA: "#c5c5c5",
  fieldB: "#9c9c9c",
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
