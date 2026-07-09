import { createSlice } from "@reduxjs/toolkit";
import { askQuestion, createSession, fetchChats } from "./chatThunks";

interface Message {
  role: "user" | "assistant";
  message: string;
}

interface ChatState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  messages: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSession.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.messages = action.payload;
      })
      .addCase(askQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(askQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push(
          { role: "user", message: action.meta.arg },
          { role: "assistant", message: action.payload }
        );
      })
      .addCase(askQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = "कुछ गलत हो गया। कृपया पुनः प्रयास करें।";
      });
  },
});

export default chatSlice.reducer;
