"use client";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  askQuestion,
  createSession,
  fetchChats,
} from "@/store/slices/chat/chatThunks";
import { RootState } from "@/store";
import { setToken } from "@/store/slices/chat/chatSlice";
import {
  Send,
  MessageSquare,
  X,
  Minimize2,
  Loader2,
  Sparkles,
  User,
  Bot,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatbotWidgetProps {
  isFullPage?: boolean;
}

export default function ChatbotWidget({
  isFullPage = false,
}: ChatbotWidgetProps) {
  const dispatch = useDispatch<any>();
  const { messages, loading, token } = useSelector(
    (state: RootState) => state.chat
  );

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(isFullPage);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const prevMessageCountRef = useRef<number>(messages.length);

  useEffect(() => {
    const initializeChat = async () => {
      const savedToken = localStorage.getItem("chatToken");

      if (savedToken) {
        dispatch(setToken(savedToken));
        dispatch(fetchChats());
      } else {
        const res = await dispatch(createSession()).unwrap();
        localStorage.setItem("chatToken", res.token);
      }
    };

    initializeChat();
  }, []);

  useEffect(() => {
    if (messages.length > prevMessageCountRef.current) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    prevMessageCountRef.current = messages.length;
  }, [messages]);

  const send = () => {
    if (!input.trim() || loading) return;
    dispatch(askQuestion(input));
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };


  if (!isFullPage) {
    return (
      <>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[500px] sm:h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 border border-gray-100"
            >
              <ChatContent
                messages={messages}
                loading={loading}
                input={input}
                setInput={setInput}
                send={send}
                handleKeyPress={handleKeyPress}
                messagesEndRef={messagesEndRef}
                onClose={() => setIsOpen(false)}
                isMinimizable
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((p) => !p)}
          className="fixed bottom-6 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center text-white z-50 p-0 leading-none overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <X className="block h-5 w-5 shrink-0" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <MessageSquare className="block h-5 w-5 shrink-0 -translate-x-[2px]" />
                {messages.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </>
    );
  }

  return (
    <div className="h-[600px] flex flex-col">
      <ChatContent
        messages={messages}
        loading={loading}
        input={input}
        setInput={setInput}
        send={send}
        handleKeyPress={handleKeyPress}
        messagesEndRef={messagesEndRef}
        isMinimizable={false}
      />
    </div>
  );
}

interface ChatContentProps {
  messages: { role: "user" | "assistant"; message: string }[];
  loading: boolean;
  input: string;
  setInput: (value: string) => void;
  send: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  onClose?: () => void;
  isMinimizable: boolean;
}

function ChatContent({
  messages,
  loading,
  input,
  setInput,
  send,
  handleKeyPress,
  messagesEndRef,
  onClose,
  isMinimizable,
}: ChatContentProps) {
  const suggestedQuestions = [
    "अग्निहोत्र के मुख्य लाभ क्या हैं",
    "भूमि उपचार की आवश्यकता क्यों है?",
    "मिट्टी में जीवाणुओं की कमी से क्या समस्या होती है?",
  ];

  return (
    <>
      { }
      <div className="bg-linear-to-r from-green-600 to-emerald-600 p-4 rounded-t-3xl">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold flex items-center gap-2">
            TCBT जैविक किसान <Sparkles className="w-4 h-4 text-yellow-300" />
          </h2>
          {isMinimizable && (
            <button onClick={onClose} className="text-white">
              <Minimize2 />
            </button>
          )}
        </div>
      </div>

      { }
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center space-y-4">
            <p className="text-gray-700 font-medium">
              नमस्ते किसान भाई! 🙏
            </p>
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => setInput(q)}
                className="block w-full text-left p-3 bg-white border rounded-xl hover:border-green-400"
              >
                {q}
              </button>
            ))}
          </div>
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              className={`flex mb-3 ${m.role === "user" ? "justify-end" : "justify-start"
                }`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-2xl text-sm ${m.role === "user"
                  ? "bg-green-600 text-white"
                  : "bg-white border"
                  }`}
              >
                {m.message}
              </div>
            </div>
          ))
        )}

        {loading && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Loader2 className="animate-spin w-4 h-4" />
            उत्तर लिख रहे हैं...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      { }
      <div className="p-4 border-t bg-white rounded-b-3xl">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="अपना सवाल लिखें..."
            className="flex-1 resize-none border rounded-xl px-3 py-2 text-sm"
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            className="bg-green-600 text-white rounded-xl w-11 h-11 flex items-center justify-center disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send />}
          </button>
        </div>
      </div>
    </>
  );
}
