import { Button } from "@mui/material";

export const DirectionButton = ({
  onClick,
  icon,
}: {
  onClick: () => void;
  icon: React.ReactNode;
}) => (
  <Button
    variant="contained"
    sx={{ background: "#fff", color: "#000" }}
    onClick={onClick}
  >
    {icon}
  </Button>
);
