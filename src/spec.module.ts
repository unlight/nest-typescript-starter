Error.stackTraceLimit = Infinity;

const specContext = require.context('.', true, /\.spec\.[tj]s$/);
specContext.keys().forEach(specContext);
