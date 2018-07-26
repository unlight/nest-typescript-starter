import { config } from '../config';

export function entityList(): Array<string | (() => void)> {
    if (config.get('runner') === 'webpack') {
        const entityContext = require.context('.', true, /\.entity\.[tj]s$/);
        return entityContext.keys().map(id => {
            const entityModule = entityContext(id);
            const [entity] = Object.values(entityModule);
            return entity;
        });
    } else {
        return ['src/app/**/*.entity.{ts,js}'];
    }
}
