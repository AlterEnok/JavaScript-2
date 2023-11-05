export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    imgElem.addEventListener('load', () => {
        const { width, height } = imgElem;
        callback(null, imgElem, width, height);
    });

    imgElem.addEventListener('error', () => callback('Image load failed'));
};

const containerElem = document.querySelector('.page');

const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const onImageLoaded = (error, imgElem, width, height) => {
    if (error) {
        console.log(error);
        return;
    }

    if (containerElem) {
        containerElem.appendChild(imgElem);
        const sizeElem = document.querySelector('.image-size');
        sizeElem.textContent = `${width} x ${height}`;
    }
    else {
        console.log('Container not found');
    }
};

addImage(imgSrc, onImageLoaded);