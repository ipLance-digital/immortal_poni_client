'use client';

import { MessageCircleMore } from 'lucide-react';
import { useUser } from '@/features/auth/model/useUser';
import { Icon, Popover } from '@/shared/ui';
import {
  IconWrapper,
  WidgetContainer,
  WidgetContent,
  WidgetWrapper,
} from './support-widget.styled';
import { ChatWidget } from '@/widgets/chat-widget/chat-widget';

export const SupportWidget = () => {
  const { user } = useUser();

  return (
    !!user && (
      <WidgetContainer>
        <Popover
          trigger={
            <IconWrapper>
              <Icon icon={MessageCircleMore} />
            </IconWrapper>
          }
        >
          <WidgetWrapper>
            <div
              style={{
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h3>Чат</h3>
            </div>

            <WidgetContent>
              <ChatWidget />
            </WidgetContent>
          </WidgetWrapper>
        </Popover>
      </WidgetContainer>
    )
  );
};
