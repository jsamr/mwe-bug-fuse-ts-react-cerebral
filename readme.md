# FuseBox + TS + React + Cerebral bug 'Super expression must either be null or a function, not undefined', MWE

The [src/application.tsx](src/application.tsx#L18) (L18) triggers an error. This is seemingly due to the `Container` class from [`@cerebral/react`](https://github.com/cerebral/cerebral/tree/next/packages/node_modules/%40cerebral/react) extending `undefined`.
