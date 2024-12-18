import React, { useEffect, useState } from 'react';

function isLink(text) {
  // Простая проверка на наличие протокола в начале строки
  return text.startsWith('http://') || text.startsWith('https://');
}

function PostList() {
  const [posts, setPosts] = useState([]);

    // useEffect(() => {
  //   axios.get('http://127.0.0.1:5000/api/v1/posts')
  //     .then(response => setPosts(response.data))
  //     .catch(error => console.error('Ошибка при получении постов:', error));
  // }, []);

  useEffect(() => {
    // Тестовые данные
    const testPosts = [
      { id: 1, title: 'Заголовок 1', text: 'Текст поста 1' },
      { id: 2, title: 'Заголовок 2', text: 'Текст поста 2' },
      { id: 3, title: 'Заголовок 3', text: 'Текст поста 3' },
      { id: 4, title: 'Заголовок 4', text: 'Текст поста 4' },
      { id: 5, title: 'Заголовок 5', text: 'https://t.me/mig41/37741' },
    ];

    setPosts(testPosts);
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{isLink(post.text) ? <a href={post.text} target="_blank" rel="noopener noreferrer">{post.text}</a> : post.text}</h2>
          <p>{isLink(post.text) ? <a href={post.text} target="_blank" rel="noopener noreferrer">{post.text}</a> : post.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
