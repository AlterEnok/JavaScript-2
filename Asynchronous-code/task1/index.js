export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;
  
    imgElem.addEventListener('load', () => {
      const { width, height } = imgElem;
      callback(null, imgElem);
    });
  
    imgElem.addEventListener('error', () => {
        callback('Image load is failed');
    });
  
    const containerElem = document.querySelector('.page');
  
    if (containerElem) {
      containerElem.appendChild(imgElem);
    } else {
      callback('Container not found');
    }
  };
  
  const onImageLoaded = (error, imgElem) => {
    if (error) {
      console.log(error);
      return;
    }
  
    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
  };
  
  const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
  
  addImage(imgSrc, onImageLoaded);