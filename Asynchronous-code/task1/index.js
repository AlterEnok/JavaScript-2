export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    
    if (containerElem) {
        containerElem.append(imgElem);

        imgElem.addEventListener('load', () => {
            const { width, height } = imgElem;
            callback(null, imgElem);
        });

        imgElem.addEventListener('error', () => {
            containerElem.removeChild(imgElem);
            callback('Image load failed');
        });
    } else {
        callback('Container not found');
    }
};

const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }

    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);