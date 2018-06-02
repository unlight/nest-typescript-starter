import { config } from './app.config';

export function entityList(): string[] | Function[] {
    // TODO: use config https://github.com/stryker-mutator/stryker-jest-runner/issues/50
    if (process.env.NODE_ENV === 'development') {
        const entityContext = require.context('.', true, /\.entity\.[tj]s$/);
        return entityContext.keys().map(id => {
            const entityModule = entityContext(id);
            const [entity] = Object.values(entityModule);
            return entity;
        });
    } else {
        return ['**/*.entity.{ts,js}'];
    }
}
