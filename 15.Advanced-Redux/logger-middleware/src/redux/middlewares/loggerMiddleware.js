// create and export middleware function here
export const loggerMiddleware = (store) => {
    return function(next) {
        return function(action) {
            //log actions
            console.log("[LOG]: " + action.type + " " + new Date().toString());
            // next middleware in pipeline.
            next(action);
            // log the modified state of app
            console.log(store.getState());
        }
    }
}