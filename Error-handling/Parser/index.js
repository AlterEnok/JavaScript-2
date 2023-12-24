export function parseUser(jsonString) {
    try {
        const result = JSON.parse(jsonString);
        return result;
    } catch (error) {
        return null;
    }
}