/**
 * 
 * @param {string} element 
 * @param {object} obj 
 * @param {string} text 
 * @returns {HTMLElemnet}
 */

export function AlertElement (element, obj = {}) {
    const div = document.createElement(element)
    
    for(const [key, value] of Object.entries(obj)){
        if(value !== false && value !== null) {
            div.setAttribute(key, value)
        }
    }
    return div
}