import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const Titles = () => {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && `Произошла ошибка: ${error.code}`}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};
