const app = require("./app");

const PORT = 3000;
const path = "/api/contacts"

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: http://localhost:${PORT}${path}`);
});
