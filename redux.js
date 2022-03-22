function counter(state, action) {
    if (typeof state === 'undefined') {
      return 0
    }

    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
}
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
            state = action.data.text;
        break;
    }
    return state;
}

var toggleStore = {
    store : Redux.createStore(toggle), 
    store2 : Redux.createStore(counter)
}
import('./reducers.js').then((re) => 
toggleStore.store = re.default );
var valueEl = document.getElementById('value')

function render() {
    valueEl.innerHTML = toggleStore.store2.getState().toString()
}

render();
toggleStore.store2.subscribe(render);

document.getElementById('increment')
.addEventListener('click', function () {
    toggleStore.store2.dispatch({ type: 'INCREMENT' })
});

document.getElementById('decrement')
.addEventListener('click', function () {
    toggleStore.store2.dispatch({ type: 'DECREMENT' })
});

document.getElementById('incrementIfOdd')
.addEventListener('click', function () {
    if (toggleStore.store2.getState() % 2 !== 0) {
        toggleStore.store2.dispatch({ type: 'INCREMENT' })
    }
});

document.getElementById('incrementAsync')
.addEventListener('click', function () {
    setTimeout(function () {
        toggleStore.store2.dispatch({ type: 'INCREMENT' })
    }, 1000)
});

function toggleRender() {
    document.querySelector('#rState').textContent = toggleStore.store.getState().toString();
}

toggleStore.store.subscribe(toggleRender);

document.querySelector('#btn2').addEventListener('click', () => {
    toggleStore.store.dispatch( {type:'INPUT', data:{ text:document.querySelector('input').value, image:'DDDD'}} );
    toggleStore.store2.dispatch({ type: 'INCREMENT' });
});