export const printing = () => {
    console.log(1);

    setTimeout(function() {
        console.log(4);
    }, 1000);

    console.log(2);

    setTimeout(function() {
        console.log(3);
    }, 0);

    setTimeout(function() {
        console.log(5);
    }, 2000);

    setTimeout(function() {
        console.log(6);
    }, 2000);
};
printing();