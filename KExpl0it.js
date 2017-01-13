const get_char_data = string => Array.from(string).map(ch => ch.charCodeAt(0));
const xor_string = (cipher, key) => get_char_data(cipher).map(cx => String.fromCharCode(cx ^ key)).join("");
const read_base10_as_base8 = x => Number.parseInt(`${x}`, 8);
const code_to_char = charCode => String.fromCharCode(charCode);
const isASCII = string => /^[\x00-\x7F]+$/.test(string);
const isPrintableASCII = string => /^[\x20-\x7F]+$/.test(string);
const custom1 = cipher => get_char_data(cipher).map(read_base10_as_base8).map(code_to_char).filter(isPrintableASCII).join("");
