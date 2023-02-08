export function balanceValidator(value){
    // /^(\d*([.](?=\d{1}))?\d+)?$/gm
    const res = /^(\d*([.](?=\d{1}))?\d+)?$/gm.exec(value);
    const valid = !!res;
    return valid;
}
