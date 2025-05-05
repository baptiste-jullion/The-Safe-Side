FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

EXPOSE 9531

# Start the Nuxt 3 application with Bun
CMD ["sh", "-c", "PORT=9531 bun .output/server/index.mjs"]
