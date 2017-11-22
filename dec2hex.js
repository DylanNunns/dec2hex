/**
 * Convert the Decimal value to its Hexadecimal counterpart
 */
function dec2hex(decimal = 0) {
    const _hexadecimal = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for (var hex = []; 0 != decimal;) {
        hex.unshift(_hexadecimal[decimal % 16]);
        decimal = Math.floor(decimal / 16);
    }
    return hex.join('');
}
