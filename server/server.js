import cors from "cors";

import express from "express";

const app = express();

app.use(express.json());

app.use(cors({ credentials: true }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;