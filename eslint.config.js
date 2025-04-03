import config from "@tree-company/eslint-config";
import TSeslint from "typescript-eslint";

export default TSeslint.config(
  ...config.configs.default,
  {
    ignores: ["dist/"],
  },
  ...TSeslint.configs.recommended,
);
