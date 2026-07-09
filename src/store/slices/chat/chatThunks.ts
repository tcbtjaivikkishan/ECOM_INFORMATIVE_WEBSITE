import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "@/lib/API/chat";

export const createSession = createAsyncThunk(
  "chat/session",
  async () => {
    await apiFetch("/api/session", { method: "POST" });
    return { sessionCreated: true };
  }
);

export const askQuestion = createAsyncThunk(
  "chat/ask",
  async (question: string) => {
    const res = await apiFetch("/api/ask", {
      method: "POST",
      body: JSON.stringify({ question }),
    });

    return res.answer || res.response || res.message || JSON.stringify(res);
  }
);

export const fetchChats = createAsyncThunk(
  "chat/history",
  async () => {
    const res = await apiFetch("/api/chats", { method: "GET" });
    return res.chats || res.messages || res || [];
  }
);
