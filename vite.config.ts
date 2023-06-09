import solid from "solid-start/vite";
import { defineConfig } from "vite";
import staticAdapter from "solid-start-static";

export default defineConfig({
  base: "/escadron-website/",
  // insert your github project name between slashes above
  plugins: [solid({ adapter: staticAdapter() })],
});
