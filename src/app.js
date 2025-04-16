import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import productsRoutes from "./routes/product.routes.js";
import categorieRoutes from "./routes/categorie.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import cuponRoutes from "./routes/cupon.routes.js";
import eventRoutes from "./routes/event.routes.js";
import reviewRoutes from "./routes/review.routes.js";

const app = express ();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
app.use("/api", menuRoutes);
app.use("/api", productsRoutes);
app.use("/api", categorieRoutes);
app.use("/api", paymentRoutes);
app.use("/api", cuponRoutes);
app.use("/api", eventRoutes);
app.use("/api", reviewRoutes);

export default app;



