import { Hono } from "hono";

const app = new Hono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/hono",
];

app.get("/", (c) => {
  return c.text(welcomeStrings.join("\n\n"));
});

// 簡易キャッシュ（実運用ならcronや定期fetch）
const cachedData = {
  weather: { city: "Tokyo", temp: 30, condition: "Sunny" },
  pokemons: ["Pikachu", "Charmander", "Bulbasaur"],
};

app.get("/weather", (c) => {
  return c.json(cachedData.weather);
});

app.get("/pokemons", (c) => {
  return c.json(cachedData.pokemons);
});

export default app;
