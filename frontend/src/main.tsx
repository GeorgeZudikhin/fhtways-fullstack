import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FHTWaysApp from "./FHTWaysApp.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <FHTWaysApp />
    </StrictMode>
);
