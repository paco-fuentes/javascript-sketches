function telephoneCheck(str) {
    // Expresión regular para validar números de teléfono de EE.UU.
    const regex = /^(1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;

    // Verifica si el número coincide con el formato
    if (!regex.test(str)) {
        return false;
    }

    // Comprobar si el número contiene caracteres no válidos o paréntesis no balanceados
    const hasInvalidCharacters = /[^0-9\s\(\)\.\-\+]/.test(str);
    const unmatchedParentheses = (str.match(/\(/g) || []).length !== (str.match(/\)/g) || []).length;

    // Verifica que si el código de país "1" está presente, debe estar seguido por un espacio o al final de la cadena
    const hasCountryCode = /^1\s/.test(str);
    if (hasCountryCode && !/^1\s/.test(str)) {
        return false;
    }

    return !hasInvalidCharacters && !unmatchedParentheses;
}

// Pruebas
console.log(telephoneCheck("555-555-5555"));         // true
console.log(telephoneCheck("1 555-555-5555"));       // true
console.log(telephoneCheck("1 (555) 555-5555"));     // true
console.log(telephoneCheck("5555555555"));           // true
console.log(telephoneCheck("555-555-5555"));         // true
console.log(telephoneCheck("(555)555-5555"));        // true
console.log(telephoneCheck("1(555)555-5555"));       // true
console.log(telephoneCheck("555-5555"));             // false
console.log(telephoneCheck("5555555"));              // false
console.log(telephoneCheck("1 555)555-5555"));       // false
console.log(telephoneCheck("1 555 555 5555"));       // true
console.log(telephoneCheck("1 456 789 4444"));       // true
console
