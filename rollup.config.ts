// rollup.config.js
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  input: "src/message/index.tsx",
  output: [
    {
      file: "./dist/cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/iife.js",
      format: "iife",
      name: "message",
    },
    {
      file: "./dist/umd.js",
      format: "umd",
      name: "message",
    },
    {
      file: "./dist/esm.js",
      format: "es",
    },
  ],
  plugins: [
    terser(),
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    typescript(),
    postcss({
      plugins: [autoprefixer(), cssnano()],
      extract: "style/index.css",
    }),
  ],
  external: ["react", "react-dom"],
};
