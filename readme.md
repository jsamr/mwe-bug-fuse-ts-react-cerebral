# FuseBox + TS + React + Cerebral bug 'Super expression must either be null or a function, not undefined', MWE

![image](https://user-images.githubusercontent.com/3646758/31048346-20301112-a5e9-11e7-8fe0-a9522fbfe073.png)

This MWE, based on `react-typescript` (`fuse-box-examples`) provides a basis to understand the issue.

The [src/application.tsx](src/application.tsx#L18) (L18) triggers an error. This is seemingly due to the `Container` class from [`@cerebral/react`](https://github.com/cerebral/cerebral/tree/next/packages/node_modules/%40cerebral/react) extending `undefined`.
However, `polyfillNonStandardDefaultUsage` is activated, so I don't think this is related to [`import React from 'react'` statements in `cerebraljs`](https://github.com/cerebral/cerebral/blob/next/packages/node_modules/%40cerebral/react/src/Container.js).

A strange thing worth mentionning in the vendor bundle is the `react@2.2.0`, I'm not sure to which library it referes (see the latest line bellow).
![image](https://user-images.githubusercontent.com/3646758/31048428-d83f788c-a5ea-11e7-8e99-ca8e09cef0a6.png)




