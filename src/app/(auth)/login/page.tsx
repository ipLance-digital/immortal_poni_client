import { AuthForm } from '@/features/auth/ui';
import { Text, VStack } from '@/shared/ui';

export default function LoginPage() {
  return (
    <VStack>
      <Text variant='heading-2'>Авторизация</Text>
      <AuthForm />
    </VStack>
  );
}
