document.addEventListener('DOMContentLoaded', () => {
  const pinsData = [
    {
      buttonText: 'http://...',
      image: 'images/husky.jpg',
      imageAlt: 'photo of husky puppy',
      title: 'Husky',
    },
    {
      buttonText: 'www.cutePuppies.com',
      image: 'images/germanShepherd.jpg',
      imageAlt: 'photo of german shepherd puppy',
      title: 'German Shepherd',
    }
  ];

  const pinListElement = document.querySelector("[data-js='pinList']");

  pinsData.forEach((pin) => {
    let pinTemplate = `
      <li class="pin">
        <div class="pin__imageWrapper">
          <img alt="${pin.imageAlt}"
               class="pin__image"
               src="${pin.image}"
          >
          <a class="pin__button"
             href="#">
            ${pin.buttonText}
          </a>
        </div>
        <h2 class="pin__title">
          ${pin.title}
        </h2>
      </li>
    `;

    // Add template to <ul> in document
    pinListElement.insertAdjacentHTML('beforeend', pinTemplate);
  });
});
