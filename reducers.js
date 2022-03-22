export default Store({toggle})

function toggle(state, action) {
    if (typeof state === 'undefined') {
        return 'inactive';
    }
    switch (action.type) {
    case 'TOGGLE':
        if ( state === 'inactive') {
            state = 'acitve';
        } else { 
            state = 'inactive';
        }
        break;
        case 'INPUT':
            state = document.querySelector('input').value;
        break;
    }
    return state;
}