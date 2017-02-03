const get_char_data = string => Array.from(string).map(ch => ch.charCodeAt(0));
const xor_string = (cipher, key) => get_char_data(cipher).map(cx => String.fromCharCode(cx ^ key)).join("");

const read_base10_as_base8 = x => Number.parseInt(`${x}`, 8);

const code_to_char = charCode => String.fromCharCode(charCode);

const isASCII = string => /^[\x00-\x7F]+$/.test(string);
const isPrintableASCII = string => /^[\x20-\x7F]+$/.test(string);

const reverse = string => string.split("").reverse().join("");

const chunk = (string, size) => string.match(new RegExp(`.{1,${size}}`, "g"));
const hex2bin = hex => chunk(hex, 2).map(xs => String.fromCharCode(Number.parseInt(xs, 16))).join("");
const dec2bin = dec => chunk(dec, 2).map(ds => String.fromCharCode(Number.parseInt(ds))).join("");

const base64_encode = btoa;
const base64_decode = atob;

const custom1 = cipher => get_char_data(cipher).map(read_base10_as_base8).map(code_to_char).filter(isPrintableASCII).join("");
const codeshell_kr_dummy64_decode = cipher => xor_string(dec2bin(base64_encode(hex2bin(reverse(cipher))), 2), 125);
