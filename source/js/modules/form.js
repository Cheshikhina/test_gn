const form = () => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');

  const message = {
    loading: {
      text: 'Устанавливаем связь с сервером',
      color: 'rgba(255,255,255,0.5)'
    },
    success: {
      text: 'ДНК-тест успешно активирован',
      color: '#6bc15a'
    },
    error: {
      text: 'Что-то пошло не так...',
      color: '#c4654d'
    }
  };

  const postData = async (url, data) => {
    document.querySelector('.form>span').textContent = message.loading.text;
    document.querySelector('.form>span').style.color = message.loading.color;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (evt) => {
      evt.preventDefault();

      let statusMessage = document.createElement('span');
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      postData('./server.php', formData)
        .then(() => {
          statusMessage.textContent = message.success.text;
          statusMessage.style.color = message.success.color;
        })
        .catch(() => {
          statusMessage.textContent = message.error.text;
          statusMessage.style.color = message.error.color;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default form;
