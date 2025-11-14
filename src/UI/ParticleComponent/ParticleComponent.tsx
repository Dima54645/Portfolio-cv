import React, { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type {
  Engine,
  ISourceOptions,
  MoveDirection,
  InteractivityDetect,
} from "@tsparticles/engine";

import ConfigDark from "../../config/particlesjs-config.json";
import ConfigLight from "../../config/particlesjs-config-light.json";
import { ParticleBox } from "./ParticleComponent.styles";
import type { ThemeModeProps } from "../../types";

const ParticlesComponent: React.FC<ThemeModeProps> = ({
  themeMode = "dark",
}) => {
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const selectedConfig = themeMode === "light" ? ConfigLight : ConfigDark;

    return {
      ...selectedConfig,

      detectRetina: Boolean(
        (selectedConfig as Record<string, unknown>).retina_detect ??
          (selectedConfig as Record<string, unknown>).detectRetina ??
          true
      ),

      interactivity: {
        ...(selectedConfig.interactivity || {}),
        detectsOn: "canvas" as InteractivityDetect,
        events: {
          ...selectedConfig.interactivity?.events,
          resize:
            typeof selectedConfig.interactivity?.events?.resize === "boolean"
              ? { enable: selectedConfig.interactivity.events.resize }
              : selectedConfig.interactivity?.events?.resize,
        },
      },

      particles: {
        ...selectedConfig.particles,
        move: {
          ...selectedConfig.particles.move,
          direction: (selectedConfig.particles.move.direction ??
            "none") as MoveDirection,
          outModes:
            typeof selectedConfig.particles.move.outModes === "object"
              ? (selectedConfig.particles.move.outModes.default as
                  | "none"
                  | "out"
                  | "bounce"
                  | "destroy"
                  | "split"
                  | undefined) ?? "out"
              : (selectedConfig.particles.move.outModes as
                  | "none"
                  | "out"
                  | "bounce"
                  | "destroy"
                  | "split"
                  | undefined) ?? "out",
        },
        links: {
          ...(selectedConfig.particles.links ?? {}),
        },
      },
    };
  }, [themeMode]);

  return (
    <ParticleBox>
      <Particles id="tsparticles" options={options} />
    </ParticleBox>
  );
};

export default React.memo(ParticlesComponent);
