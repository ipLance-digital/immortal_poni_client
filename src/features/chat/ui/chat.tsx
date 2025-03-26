'use client';

import { Button, HStack, VStack } from '@/shared/ui';
import { Send } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import { useChatWebSocket } from '../hooks/useChatWebSocket';

export const Chat = () => {
  const { messages, sendMessage, readyState } = useChatWebSocket();
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <VStack $flex={1}>
      <VStack
        $flex={1}
        $gap={8}
        style={{ maxHeight: '100%', overflowY: 'auto' }}
      >
        {messages.map((msg, index) => (
          <div key={index} className='message'>
            {msg}
          </div>
        ))}
      </VStack>

      <HStack as={'form'} $gap={8} onSubmit={handleSendMessage}>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ flex: 1, padding: 8, outline: 'none', borderRadius: 8 }}
        />
        <Button
          type='submit'
          $size='xl'
          loading={readyState === 0}
          disabled={readyState !== 1}
        >
          <Send />
        </Button>
      </HStack>
    </VStack>
  );
};
