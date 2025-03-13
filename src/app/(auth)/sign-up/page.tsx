import { SignUpForm } from '@/features/auth/sing-up-form';

export default function SignUpPage() {
  return (
    <div className='w-[400px] mx-auto px-6 mt-10'>
      <h2 className='font-bold mb-2'>Регистрация</h2>
      <SignUpForm />
    </div>
  );
}
