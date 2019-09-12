function password(str) {
    let upper = /[A-Z]/g;
    let lower = /[a-z]/g;
    let number = /[0-9]/g;
    if (upper.test(str)) {
        if (lower.test(str)) {
            if (number.test(str)) {
                if (str.length >= 8) {
                    return true
                }
            }
        }
    }
    return false
}