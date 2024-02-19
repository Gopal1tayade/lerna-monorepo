// packages/ui-library/index.js
import { init } from 'snabbdom/build/package/init';
import { classModule } from 'snabbdom/build/package/modules/class';
import { propsModule } from 'snabbdom/build/package/modules/props';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';

const patch = init([classModule, propsModule, eventListenersModule]);

export function createApp(container, template, initialState, onMount) {
  let state = initialState;

  function updateState(newState) {
    state = newState;
    render();
  }

  function render() {
    const newVNode = template({ state, updateState });
    patch(container, newVNode);
  }

  function mount() {
    if (onMount) {
      onMount();
    }
    render();
  }

  return { mount };
}
