window.addEventListener('error', function onUnhandledError(err) {
    console.error('error', err.message);
});

let userParsingResult;

try {
    const userData = '{"name": "John", "age": 30, "email": "john@example.com"}';
    const user = JSON.parse(userData);
    console.log('User data: ', user);
    userParsingResult = 'success';
    console.log('Parsing user finished successfully');
} catch (e) {
    userParsingResult = 'error';
    console.error('Parsing user failed');
} finally {
    console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
    const brokenProductData =
        '{"name": "ProductA", "price": 25.5, "description": "Product description",}';
    const product = JSON.parse(brokenProductData);
    console.log('Product data: ', product);
    productParsingResult = 'success';
} catch (e) {
    productParsingResult = 'error';
    console.error('Parsing product failed');
} finally {
    console.log(`Product parsing finished with ${productParsingResult}`);
}