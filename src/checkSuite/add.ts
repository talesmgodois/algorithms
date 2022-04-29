export const add = (...args: number[]) => {
    return args.reduce((acc, value) => {
        return acc+=value;
    }, 0)
}