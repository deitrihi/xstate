function toggleRender2() {
    document.querySelector('#rState2').textContent = toggleStore.store.getState().toString();
}
toggleStore.store.subscribe(toggleRender2);