export const config = () => ({
    name: 'Application',
    get port() {
        return process.env.PORT || 3000;
    },
    get production() {
        return process.env.NODE_ENV === 'production';
    },
});

export type AppConfig = Readonly<ReturnType<typeof config>>;
