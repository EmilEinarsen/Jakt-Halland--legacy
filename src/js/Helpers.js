export const targetId = e => e.target.id
export const parentId = e => e.target.parentElement.id
export const queryTarget = param => document.querySelector(param)
export const queryTargetAll = param => document.querySelectorAll(param)
export const body = document.body