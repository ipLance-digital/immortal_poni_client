import { FC } from 'react';

interface ProfileWidgetProps {
  userId: string;
}

export const ProfileWidget: FC<ProfileWidgetProps> = ({ userId }) => {
  return (
    <div className='profile-widget'>
      {/* Здесь будут использоваться компоненты из features и entities */}
      <h1>Профиль пользователя</h1>
      <p>ID: {userId}</p>
      {/* Например: <UserInfo userId={userId} /> из entities/user */}
      {/* <EditProfileForm /> из features/edit-profile */}
    </div>
  );
};
