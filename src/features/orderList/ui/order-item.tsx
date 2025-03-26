'use client';

import { OrderDTO } from '@/entities/order/types';
import { Button, HStack, Icon, Text, VStack } from '@/shared/ui';
import { FC } from 'react';
import { OrderWrapper, Tag } from './order.styled';
import { useTheme } from 'styled-components';
import { Flame, LucideFlame } from 'lucide-react';

interface IProps {
  order: OrderDTO;
  isImidiate?: boolean;
}

export const OrderItem: FC<IProps> = ({ order, isImidiate }) => {
  const theme = useTheme();

  return (
    <VStack as={OrderWrapper} gap={16}>
      {/* HEADER */}
      <VStack gap={8}>
        <Text variant='body-13' color={theme.colors.gray[400]}>
          Сейчас смотрят 4 человека
        </Text>

        <VStack gap={4}>
          <HStack align='center' gap={8}>
            <Text variant='heading-2'>Редизайн сайта NovaPulse</Text>
            {isImidiate && (
              <Icon
                icon={Flame}
                size={24}
                color={theme.colors.red[600]}
                fill={theme.colors.red[600]}
              />
            )}
          </HStack>
          <Text variant='heading-3'>120 000 ₽</Text>
        </VStack>
      </VStack>
      {/* /HEADER */}

      <Text color={theme.colors.gray[500]}>
        Основная цель проекта: обновить существующий визуальный стиль, сделав
        его более современным, привлекательным и соответствующим актуальным
        трендам веб-дизайна. Улучшить пользовательский опыт (UX), упростив
        навигацию, повысив интуитивность интерфейса и удобство взаимодействия
        для посетителей.
      </Text>

      <VStack gap={8}>
        <HStack gap={32}>
          <VStack gap={4}>
            <Text variant='body-13' color={theme.colors.gray[400]}>
              Уровень сложности
            </Text>
            <Text>Средний</Text>
          </VStack>

          <VStack gap={4}>
            <Text variant='body-13' color={theme.colors.gray[400]}>
              Срок исполнения
            </Text>
            <Text>14 дней</Text>
          </VStack>
        </HStack>

        <VStack gap={4}>
          <Text variant='body-13' color={theme.colors.gray[400]}>
            Ключевые навыки
          </Text>
          <HStack gap={8}>
            <Tag>
              <Text variant='body-13'>UI/UX</Text>
            </Tag>
            <Tag>
              <Text variant='body-13'>Figma</Text>
            </Tag>
            <Tag>
              <Text variant='body-13'>Tilda</Text>
            </Tag>
          </HStack>
        </VStack>
      </VStack>

      {/* FOOTER */}
      <VStack gap={8}>
        <HStack gap={8} justify='flex-end'>
          <Button size='lg' variant='surface'>
            Подробнее
          </Button>
          <Button size='lg'>Стать исполнителем</Button>
        </HStack>
        <HStack justify='space-between'>
          <Text variant='body-13' color={theme.colors.gray[400]}>
            Размещено 2 часа назад
          </Text>
          <Text variant='body-13' color={theme.colors.gray[400]}>
            Уже откликнулось 102 человека
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
