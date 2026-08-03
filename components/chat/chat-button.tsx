'use client';

import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatKnowledge, site } from '@/lib/constants';
import type { ChatMessage } from '@/lib/chat';
import { getResponse } from '@/lib/chat';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

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

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: '#171717',
          color: '#fafafa',
        }}
        aria-label="Chat with Jaja"
      >
        <MessageCircle size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e5e5',
            }}
          >
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ borderBottom: '1px solid #e5e5e5' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: '#171717', color: '#fafafa' }}>
                  J
                </div>
                <span className="text-sm font-medium">Chat with Jaja</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 transition-colors"
                style={{ color: '#737373' }}
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: '300px' }}>
              {messages.length === 0 && (
                <p className="text-sm text-center" style={{ color: '#737373' }}>
                  Ask me about Jaycee&apos;s work, skills, or background.
                </p>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="max-w-[80%] px-3 py-2 rounded-lg text-sm"
                    style={{
                      backgroundColor: msg.role === 'user' ? '#171717' : '#f5f5f5',
                      color: msg.role === 'user' ? '#fafafa' : '#171717',
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg text-sm" style={{ backgroundColor: '#f5f5f5' }}>
                    <Loader2 size={14} className="animate-spin" style={{ color: '#737373' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div
              className="px-4 py-3 flex gap-2"
              style={{ borderTop: '1px solid #e5e5e5' }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Jaycee..."
                className="flex-1 px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-1"
                style={{
                  borderColor: '#e5e5e5',
                  color: '#171717',
                  backgroundColor: '#ffffff',
                }}
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  backgroundColor: '#171717',
                  color: '#fafafa',
                }}
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