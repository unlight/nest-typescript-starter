export const errorMiddleware = (req, res, next) => {
    console.log(`Foo error`);
    next(new Error('foo'));
};
