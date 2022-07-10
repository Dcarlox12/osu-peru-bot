import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
	plugins: [vue()],
	root: resolve(__dirname, "src", "client"),
	build: {
		outDir: resolve(__dirname, "build", "client"),
	},
});
