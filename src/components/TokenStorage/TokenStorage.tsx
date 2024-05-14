import { useLocalStorage } from '../../hooks/useLocalStorage';

export const TokenStorage = () => {
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  return (
    <div>
      <p>
        Твой токен: { token || 'Данные отсутствуют' }
      </p>
      <div>
        <button onClick={() => setItem('new-token')}>
          Задать токен
        </button>
        <button onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );
};
