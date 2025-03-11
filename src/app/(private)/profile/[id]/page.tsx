export default function ProfilePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className='container'>
      <h1>Профиль пользователя</h1>
      <p>{id}</p>
    </div>
  );
}
