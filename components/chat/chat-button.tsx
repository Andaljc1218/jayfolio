'use client';

import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatKnowledge, site } from '@/lib/constants';
import { chatSuggestions, getResponse } from '@/lib/chat';
import type { ChatMessage } from '@/lib/chat';
import { useTheme } from '@/components/theme-provider';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const bgColor = isDark ? '#111111' : '#ffffff';
  const borderColor = isDark ? '#222222' : '#e0e0dc';
  const textColor = isDark ? '#fafafa' : '#181818';
  const secondaryColor = isDark ? '#a0a0a0' : '#525252';
  const inputBg = isDark ? '#171111' : '#fafafa';
  const accentColor = isDark ? '#3b82f6' : '#2563eb';

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setShowSuggestions(false);
    const userMessage: ChatMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(trimmed);
      const botMessage: ChatMessage = { role: 'bot', content: response };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (query: string) => {
    setShowSuggestions(false);
    const userMessage: ChatMessage = { role: 'user', content: query };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(query);
      const botMessage: ChatMessage = { role: 'bot', content: response };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: 'var(--theme-accent)',
          color: 'var(--theme-bg)',
        }}
        aria-label="Chat with Jaja"
      >
        <MessageCircle size={18} />
        <span className="text-sm font-medium hidden sm:inline">Chat with Jaja</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-[var(--card-radius)] shadow-2xl overflow-hidden flex flex-col"
            style={{
              backgroundColor: bgColor,
              border: `1px solid ${borderColor}`,
            }}
          >
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ borderBottom: `1px solid ${borderColor}` }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{
                    backgroundColor: 'var(--theme-accent)',
                    color: 'var(--theme-bg)',
                  }}
                >
                  J
                </div>
                <span className="text-sm font-medium" style={{ color: textColor }}>
                  Chat with Jaja
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 transition-colors"
                style={{ color: secondaryColor }}
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{ maxHeight: 'calc(100vh - 220px)' }}
            >
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div
                    className="p-3 rounded-[var(--btn-radius)] text-sm"
                    style={{
                      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
                      color: textColor,
                    }}
                  >
                    <p className="mb-1 font-medium" style={{ color: textColor }}>
                      Hi! I&apos;m Jaja.
                    </p>
                    <p className="text-sm" style={{ color: secondaryColor }}>
                      Ask me about:
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {[
                        'Projects',
                        'Experience',
                        'Education',
                        'Tech Stack',
                        'Resume',
                        'Contact',
                      ].map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: isDark ? '#0a0a0a' : '#e5e5e5',
                            color: secondaryColor,
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {showSuggestions && (
                    <div className="space-y-2 pt-2">
                      <p className="text-xs" style={{ color: secondaryColor }}>
                        Suggested questions:
                      </p>
                      {chatSuggestions.map((suggestion) => (
                        <button
                          key={suggestion.label}
                          onClick={() => handleSuggestionClick(suggestion.query)}
                          className="w-full text-left px-3 py-2 rounded-[var(--btn-radius)] text-sm transition-all text-left"
                          style={{
                            backgroundColor: isDark ? '#0a0a0a' : '#f5f5f5',
                            color: textColor,
                            border: `1px solid ${borderColor}`,
                          }}
                        >
                          {suggestion.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-[var(--btn-radius)] text-sm leading-relaxed`}
                    style={{
                      backgroundColor:
                        msg.role === 'user' ? 'var(--theme-accent)' : isDark ? '#1a1a1a' : '#f5f5f5',
                      color:
                        msg.role === 'user' ? 'var(--theme-bg)' : textColor,
                    }}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-[var(--btn-radius)] text-sm"
                    style={{ backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5' }}
                  >
                    <div className="flex items-center gap-1" style={{ color: secondaryColor }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: secondaryColor }} />
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse animation-delay-200" style={{ backgroundColor: secondaryColor, animationDelay: '200ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse animation-delay-400" style={{ backgroundColor: secondaryColor, animationDelay: '400ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div
              className="px-4 py-3 flex gap-2"
              style={{
                borderTop: `1px solid ${borderColor}`,
                backgroundColor: bgColor,
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me about..."
                className="flex-1 px-4 py-2.5 rounded-[var(--btn-radius)] text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--theme-bg)]"
                style={{
                  backgroundColor: inputBg,
                  borderColor: borderColor,
                  color: textColor,
                  border: `1px solid ${borderColor}`,
                }}
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 rounded-[var(--btn-radius)] text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'var(--theme-accent)',
                  color: 'var(--theme-bg)',
                }}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
