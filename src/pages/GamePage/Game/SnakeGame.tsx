import { useEffect, useRef, useState, useCallback } from "react";
import {
  Box,
  Button,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  RestartAlt,
  Add,
  Remove,
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Stars,
  Scoreboard,
} from "@mui/icons-material";
import { DirectionButton } from "./UI/DirectionButton";
import type { Point } from "./SnakeGame.types";
import { COLORS, DIRS } from "./SnakeGame.const";
import {
  ControlRow,
  GameCard,
  MobileControls,
  PanelCard,
  Root,
  SidePanel,
} from "./SnakeGame.styles";
import { useTranslation } from "react-i18next";

export default function SnakeGame() {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const cols = 20;
  const rows = 28;

  const [cellSize, setCellSize] = useState(20);
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 14 }]);
  const [dir, setDir] = useState<Point>({ x: 0, y: -1 });
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });

  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(8);
  const moveTimerRef = useRef<number | null>(null);

  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("snake_highscore") || 0)
  );

  const changeDir = useCallback((nd: Point) => {
    setDir((prev) => (prev.x + nd.x === 0 && prev.y + nd.y === 0 ? prev : nd));
  }, []);

  useEffect(() => {
    const resize = () => {
      const c = containerRef.current;
      if (!c) return;

      const size = Math.min(
        Math.floor(c.clientWidth / cols),
        Math.floor(c.clientHeight / rows)
      );

      setCellSize(size);

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = cols * size;
        canvas.height = rows * size;
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (DIRS[e.key]) changeDir(DIRS[e.key]);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [changeDir]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++) {
        ctx.fillStyle = (x + y) % 2 === 0 ? COLORS.fieldA : COLORS.fieldB;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }

    ctx.fillStyle = COLORS.food;
    ctx.fillRect(
      food.x * cellSize + 2,
      food.y * cellSize + 2,
      cellSize - 4,
      cellSize - 4
    );

    snake.forEach((p, i) => {
      ctx.fillStyle = i === 0 ? COLORS.snakeHead : COLORS.snakeBody;
      ctx.fillRect(
        p.x * cellSize + 1,
        p.y * cellSize + 1,
        cellSize - 2,
        cellSize - 2
      );
    });
  }, [snake, food, cellSize]);

  useEffect(() => {
    if (!running || paused) {
      if (moveTimerRef.current) clearInterval(moveTimerRef.current);
      return;
    }

    const interval = Math.max(40, 1000 / speed);

    moveTimerRef.current = window.setInterval(() => {
      setSnake((prev) => {
        const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };

        head.x = (head.x + cols) % cols;
        head.y = (head.y + rows) % rows;

        if (prev.some((p) => p.x === head.x && p.y === head.y)) {
          triggerGameOver();
          return prev;
        }

        const grew = head.x === food.x && head.y === food.y;

        if (grew) {
          setScore((s) => s + 1);
          setFood(generateFood([...prev, head]));
        }

        return [head, ...prev.slice(0, grew ? prev.length : prev.length - 1)];
      });
    }, interval);

    return () => clearInterval(moveTimerRef.current!);
  }, [running, paused, dir, speed]);

  const generateFood = (body: Point[]) => {
    const occupied = new Set(body.map((p) => `${p.x},${p.y}`));

    const free: Point[] = [];
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++)
        if (!occupied.has(`${x},${y}`)) free.push({ x, y });

    return free[Math.floor(Math.random() * free.length)];
  };

  const triggerGameOver = () => {
    setRunning(false);
    setGameOver(true);

    setHighScore((h) => {
      const res = Math.max(h, score);
      localStorage.setItem("snake_highscore", String(res));
      return res;
    });
  };

  const startPauseToggle = () => {
    if (gameOver) return;
    setPaused((p) => (running ? !p : false));
    if (!running) setRunning(true);
  };

  const restart = () => {
    setGameOver(false);
    setPaused(false);
    setRunning(true);
    setScore(0);
    setSnake([{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }]);
    setDir({ x: 0, y: -1 });
    setFood(generateFood([]));
  };

  return (
    <Root>
      <GameCard ref={containerRef} sx={{ position: "relative" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />

        {(gameOver || paused || !running) && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(2px)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "white",
                fontSize: "calc(1rem + 2vw)",
              }}
            >
              {gameOver
                ? t("game.GameOver")
                : paused
                ? t("game.Pause")
                : t("game.SnakeGame")}
            </Typography>

            <Button
              variant="contained"
              sx={{ color: "black", backgroundColor: "white" }}
              startIcon={gameOver || paused ? <RestartAlt /> : <PlayArrow />}
              onClick={gameOver || paused ? restart : startPauseToggle}
            >
              {gameOver || paused ? t("game.Restart") : t("game.Start")}
            </Button>
          </Box>
        )}
      </GameCard>

      <SidePanel>
        <PanelCard>
          <CardContent sx={{ p: 0 }}>
            <MobileControls>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <DirectionButton
                  onClick={() => changeDir({ x: 0, y: -1 })}
                  icon={<KeyboardArrowUp />}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <DirectionButton
                  onClick={() => changeDir({ x: -1, y: 0 })}
                  icon={<KeyboardArrowLeft />}
                />
                <DirectionButton
                  onClick={() => changeDir({ x: 0, y: 1 })}
                  icon={<KeyboardArrowDown />}
                />
                <DirectionButton
                  onClick={() => changeDir({ x: 1, y: 0 })}
                  icon={<KeyboardArrowRight />}
                />
              </Box>
            </MobileControls>
          </CardContent>
        </PanelCard>

        <PanelCard>
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <PanelCard sx={{ flex: 1, p: 1  }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="caption"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Scoreboard />
                    {t("game.Score")}
                  </Typography>
                  <Typography variant="h6">{score}</Typography>
                </CardContent>
              </PanelCard>

              <PanelCard sx={{ flex: 1, p: 1  }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="caption"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Stars />{t("game.HighScore")}
                  </Typography>
                  <Typography variant="h6">{highScore}</Typography>
                </CardContent>
              </PanelCard>
            </Box>

            <Button
              variant="contained"
              fullWidth
              onClick={startPauseToggle}
              startIcon={running && !paused ? <Pause /> : <PlayArrow />}
              sx={{ background: "#fff", color: "#000" }}
            >
              {running && !paused ? "Пауза" : "Старт"}
            </Button>
          </CardContent>
        </PanelCard>

        <PanelCard>
          <CardContent>
            <ControlRow>
              <IconButton onClick={() => setSpeed((s) => Math.max(3, s - 1))}>
                <Remove />
              </IconButton>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {t("game.Speed")}: {speed}
              </Typography>
              <IconButton onClick={() => setSpeed((s) => Math.min(20, s + 1))}>
                <Add />
              </IconButton>
            </ControlRow>
          </CardContent>
        </PanelCard>
      </SidePanel>
    </Root>
  );
}
