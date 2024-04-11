FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run generate

FROM nginx:latest
COPY --from=build /app/.output/public/ /usr/share/nginx/html/
COPY --from=build /app/.output/public/config/nginx/default.conf /etc/nginx/conf.d/default.conf