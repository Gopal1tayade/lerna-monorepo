
import { h } from 'snabbdom/build/package/h';
import { createApp as createUIApp } from 'uilibrary';

const appContainer = document.getElementById('app');

const template = ({ state, updateState }) =>
  h('div', [
    h('h1', state),
    h('button', { on: { click: () => updateState(state + 1) } }, 'Add'),
  ]);

const initialState = 0;

const onMount = () => {
  console.log('Component mounted!');
};

const app = createUIApp(appContainer, template, initialState, onMount);

// Mount the app
app.mount();
