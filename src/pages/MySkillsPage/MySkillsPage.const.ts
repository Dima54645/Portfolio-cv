import { useTranslation } from "react-i18next";

export const useSkillData = () => {
  const { t } = useTranslation();

  return [
    { title: t("skills.operatingSystems"), skills: ["Windows"] },
    {
      title: t("skills.programmingLanguages"),
      skills: ["JavaScript", "TypeScript"],
    },
    {
      title: t("skills.librariesAndFrameworks"),
      skills: [
        "React",
        "React Router",
        "Redux",
        "Redux Toolkit",
        "Next.js",
        "React Hook Form",
        "i18next",
        "Axios",
        "Framer Motion",
      ],
    },
    {
      title: t("skills.stylesAndUI"),
      skills: ["HTML", "CSS", "SCSS", "Material UI", "Bootstrap"],
    },
    {
      title: t("skills.buildTools"),
      skills: ["npm", "yarn", "Webpack", "Vite"],
    },
    {
      title: t("skills.testingLintingFormatting"),
      skills: ["React Testing", "ESLint", "Prettier", "Vitest"],
    },
    { title: t("skills.versionControl"), skills: ["Git", "GitHub", "GitLab"] },
    {
      title: t("skills.devOps"),
      skills: ["Docker", "GitHub Actions", "GitLab CI/CD"],
    },
  ];
};
