export default function decorate(block) {
  const [imageWrapper, titleWrapper, subtitleWrapper, buttonWrapper] = block.children;

  // Crear contenedor principal del banner
  const bannerContainer = document.createElement('div');
  bannerContainer.className = 'banner-container';

  // Procesar la imagen
  if (imageWrapper) {
    const img = imageWrapper.querySelector('img');
    if (img) {
      const imageContainer = document.createElement('div');
      imageContainer.className = 'banner-image';
      imageContainer.appendChild(img);
      bannerContainer.appendChild(imageContainer);
    }
  }

  // Crear contenedor de contenido
  const contentContainer = document.createElement('div');
  contentContainer.className = 'banner-content';

  // Procesar el título
  if (titleWrapper) {
    const title = document.createElement('h2');
    title.className = 'banner-title';
    title.textContent = titleWrapper.textContent.trim();
    contentContainer.appendChild(title);
  }

  // Procesar el subtítulo
  if (subtitleWrapper) {
    const subtitle = document.createElement('div');
    subtitle.className = 'banner-subtitle';
    subtitle.innerHTML = subtitleWrapper.innerHTML;
    contentContainer.appendChild(subtitle);
  }

  // Procesar el botón
  if (buttonWrapper) {
    const link = buttonWrapper.querySelector('a');
    if (link) {
      link.className = 'banner-button';
      contentContainer.appendChild(link);
    }
  }

  bannerContainer.appendChild(contentContainer);
  block.replaceChildren(bannerContainer);
}
