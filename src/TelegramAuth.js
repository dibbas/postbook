import React, { useEffect, useState } from 'react';

const TelegramAuth = () => {
    const [authStatus, setAuthStatus] = useState(null);

    useEffect(() => {
        // Получаем данные и хэш от Telegram Web App
        const initData = window.Telegram.WebApp.initData;
        const initDataHash = window.Telegram.WebApp.initDataHash;

        // Отправляем данные на сервер для проверки
        fetch('http://185.251.91.251:8000/api/v1/users/auth/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                initData: initData,
                initDataHash: initDataHash
            })
        })
        .then(response => response.json())
        .then(data => {
            // Проверяем, есть ли токен в ответе сервера
            if (data.token) {
                // Успешная аутентификация
                setAuthStatus('Success');
                // Можно сохранить токен, если нужно
                // localStorage.setItem('token', data.token);
            } else {
                // Неудачная аутентификация
                setAuthStatus('Fail');
            }
        })
        .catch(error => {
            console.error('Ошибка авторизации:', error);
            setAuthStatus('Fail');
        });
    }, []);

    return (
        <div>
            {authStatus === 'Success' ? (
                <h1>Success</h1>
            ) : authStatus === 'Fail' ? (
                <h1>Fail</h1>
            ) : (
                <h1>Checking Authorization...</h1>
            )}
        </div>
    );
};

export default TelegramAuth;
