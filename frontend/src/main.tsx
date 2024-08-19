import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css"
import 'react-h5-audio-player/lib/styles.css';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </QueryClientProvider>
  </StrictMode>
);
