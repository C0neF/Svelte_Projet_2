import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		basicSsl()
	],
	server: {
		host: '0.0.0.0', // 允许局域网访问
		port: 5173, // 指定端口
		https: true // 启用 HTTPS
	}
});
