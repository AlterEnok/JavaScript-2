export function bind(func, context, ...args) {
  return function (...newArgs) {
    return func.apply(context, [...args, ...newArgs]);
  };
}
