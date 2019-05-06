export const APPREDUXTEST = "APPREDUXTEST";
export const APPREDUXCHANGE = "APPREDUXCHANGE";

export function appReduxTest() {
    return {type: APPREDUXTEST}
}
export function appReduxChange(app) {
    return {
        type: APPREDUXCHANGE,
        app:app
    }
}
