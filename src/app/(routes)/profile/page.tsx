import { ProfileWidget } from '@/widgets/profile/ProfileWidget'

export default function ProfilePage() {
  // В реальном приложении ID пользователя будет получен из 
  // параметров URL или состояния авторизации
  const userId = '1'

  return (
    <main className="profile-page">
      <ProfileWidget userId={userId} />
    </main>
  )
}
