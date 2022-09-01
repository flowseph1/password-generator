export function generatePass(length: number, options: string[]) {
    const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS = '0123456789';
    const ESPECIAL_CHAR = '!@#$%^&*()_+~\\`|}{[]:;?><,./-=';

    let generatedPass = '';

    for (let i = 0; i < length; i++) {
        let optionSelector;

        if (i < options.length) {
            optionSelector = i;
        } else {
            optionSelector = Math.floor(Math.random() * options.length);
        }

        switch (options[optionSelector]) {
            case 'UPPER':
                generatedPass += UPPER_CASE.charAt(Math.floor(Math.random() * UPPER_CASE.length));
                break;

            case 'LOWER':
                generatedPass += LOWER_CASE.charAt(Math.floor(Math.random() * LOWER_CASE.length));
                break;

            case 'NUMBERS':
                generatedPass += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
                break;

            case 'SYMBOLS':
                generatedPass += ESPECIAL_CHAR.charAt(Math.floor(Math.random() * ESPECIAL_CHAR.length));
                break;

            default:
                break;
        }
    }

    return generatedPass
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
}
