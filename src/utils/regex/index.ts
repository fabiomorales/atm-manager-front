export const onlySpecialChars = new RegExp(/[^a-zA-z0-9]/g);
export const onlyA = new RegExp(/[a]+/g);
export const onlyChars = new RegExp(/[^\u0041-\u005A\u0061-\u007A\u00C0-\u00FF\s]/g, '');
export const only9 = new RegExp(/[9]+/g);
export const onlyAsterisk = new RegExp(/[*]+/g);
export const onlyNumbers = new RegExp(/[^0-9]/g); // only accepts numbers
export const twoSpaces = new RegExp(/\s{2,}/g); // two spaces
export const validateSpecialChars = new RegExp(/^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\-'" ]+$/i);
export const onlyCharsAndUnicode = new RegExp(/[a-zA-Z\u00C0-\u00FF ]+/i);
export const regexValidateChars = new RegExp(/^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\- ]+$/);
export const regexValidatePassword = new RegExp(/^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/);
export const onlyCharsAndNumbersAndUnicode = new RegExp(/[0-9a-zA-Z\u00C0-\u00FF ]+/i);
export const validateDateFormat = new RegExp('\\d{2}/\\d{2}/\\d{4}');
export const minZip = new RegExp(/^.{1,}$/);
export const maskCurrency = new RegExp(/(\d)(?=(\d{3})+\.)/g);
export const maskCurrencyChange = new RegExp(/([0-9]*)([0-9]{2})$/);
export const regexNumber = new RegExp(/[^\d]/g);
export const regexNumberPhone = new RegExp(/^.{14,}$/);
