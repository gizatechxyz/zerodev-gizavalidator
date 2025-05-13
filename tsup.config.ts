import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts", "src/**/*.tsx"],
	sourcemap: true,
	clean: true,
	format: "esm",
	dts: true,
	platform: "neutral",
	target: "es2024",
});
