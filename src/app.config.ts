export const config = () => ({
    name: 'Application',
    port: process.env.PORT || 3000,
});

export type AppConfig = ReturnType<typeof config>;
