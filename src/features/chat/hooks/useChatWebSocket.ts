'use client';

import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { toast } from 'sonner';

// Функция для получения токена из cookies
const getTokenFromCookie = (): string | null => {
  const match = document.cookie.match(/(^| )access_token=([^;]+)/);
  return match ? match[2] : null;
};

export const useChatWebSocket = () => {
  const [messages, setMessages] = useState<Array<string>>([]);

  const token = getTokenFromCookie();

  const wsUrl = token ? `ws://z.qseawd.ru:8000/ws/chat/2?token=${token}` : '';

  const { sendMessage, lastMessage, readyState } = useWebSocket(wsUrl, {
    onOpen: () => {
      console.log('WebSocket connected');
    },
    onClose: (event) => {
      console.log('WebSocket disconnected');
      console.log(event);
    },
    onError: (event) => {
      console.error('WebSocket error', event);
      toast.error('Сообщения недоступны для получения и отправки');
    },
  });

  useEffect(() => {
    if (lastMessage) {
      setMessages((prevMessages) => [...prevMessages, lastMessage.data]);
    }
  }, [lastMessage]);

  const sendChatMessage = (message: string) => {
    sendMessage(message);
  };

  return { messages, sendMessage: sendChatMessage, readyState };
};
