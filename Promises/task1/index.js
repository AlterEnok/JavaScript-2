export const addImage = (imgSrc) => {
    return new Promise((resolve, reject) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My photo');
        imgElem.src = imgSrc;

        imgElem.addEventListener('load', () => {
            const { width, height } = imgElem;
            const containerElem = document.querySelector('.page');
            if (containerElem) {
                containerElem.appendChild(imgElem);
                resolve({ width, height });
            } else {
                reject(new Error('Container not found'));
            }
        });

        imgElem.addEventListener('error', () => {
            reject(new Error('Image load is failed...'));
        });
    });
};


const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

addImage(imgSrc)
    .then(({ width, height }) => {
        const sizeElem = document.querySelector('.image-size');
        sizeElem.textContent = `${width} x ${height}`;
    })
    .catch((error) => {
        console.error(error.message);
    });