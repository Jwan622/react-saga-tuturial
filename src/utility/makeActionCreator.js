export const makeActionCreator = (type, ...argNames) => {
    return function(...args) {
        let action = { type };
        // argNames is something like "id" and args is the value.
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        });
        return action
    }
};