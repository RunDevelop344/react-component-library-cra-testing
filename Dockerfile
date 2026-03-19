# ---------- Stage 1: Build React App ----------
FROM node:18-alpine AS build

WORKDIR /simran_simran_ui_garden_build_checks

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- Stage 2: Production Server ----------
FROM nginx:alpine

# Copy production build to Nginx public folder
COPY --from=build /simran_simran_ui_garden_build_checks/build /usr/share/nginx/html

# Expose assignment-required port
EXPOSE 8018

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]