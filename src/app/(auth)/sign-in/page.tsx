import { SignInForm } from '@/features/auth/sing-in-form';

export default function SignInPage() {
  return (
    <div className='w-[400px] mx-auto px-6 mt-10'>
      <h2 className='font-bold mb-2'>Вход</h2>
      <SignInForm />
    </div>
  );
}
