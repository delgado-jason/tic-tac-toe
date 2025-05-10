function globalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if(e.target.matches(selector)) {
            callback(e);
        }
    })
}

export default globalEventListener;