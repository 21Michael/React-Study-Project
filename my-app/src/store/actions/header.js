import { OPEN_CLOSE_FORM, CHANGE_INPUT } from './actionTypes.js'

export function openCloseForm() {
    return { type: OPEN_CLOSE_FORM }
}
export function onChangeInput(value) {
	console.log("headerAction: " + value)
    return { type: CHANGE_INPUT, value: value }
}
