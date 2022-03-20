import { createMachine, interpret } from "xstate";

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
});

// Machine instance with internal state
window.toggleService = interpret(toggleMachine)
  .onTransition((state) => {
      console.log(state.value, state);
      document.querySelector('#vState').textContent = state.value;
    })
  .start();
