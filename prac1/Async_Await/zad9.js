async function fetchAndProcessData(url) {
  try {
    if (typeof url !== 'string' || !url.trim()) {
      console.error('Некорректный URL');
      return null;
    }

    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Ошибка запроса: ${response.status}`);
      return null;
    }

    const data = await response.json();

    if (typeof process !== 'function') {
      console.error('Функция обработки не определена');
      return null;
    }

    return process(data);
  } catch (err) {
    console.error('Ошибка:', err.message);
    return null;
  }
}
fetchAndProcessData('https://github.com/ognevpasa671-byte/Mo/upload/main/prac1/Async_Await')
  .then(result => console.log('Результат:', result));
