import type { Dispatch, SetStateAction } from "react";

export interface PropsOverplay {
  running: boolean;
  paused: boolean;
  gameOver: boolean;
  restart: () => void;
  startPauseToggle: () => void;
}

export type Point = { x: number; y: number };

export interface PropsGameCanvas {
  snake: Point[];
  food: Point;
  cellSize: number;
  cols: number;
  rows: number;
}

export interface PropsScorePanel {
  score: number;
  highScore: number;
  running: boolean;
  paused: boolean;
  startPauseToggle: () => void;
}

export interface DirectionControlsProps {
  changeDir: (d: Point) => void;
}

export interface SpeedControlProps {
  speed: number;
  setSpeed: Dispatch<SetStateAction<number>>;
}