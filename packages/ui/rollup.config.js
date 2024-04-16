import fs from 'node:fs';
import ts from 'typescript';
import del from 'rollup-plugin-delete';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const { dependencies = {}, peerDependencies = {} } =
    JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const commonExternal = [
    'react/jsx-runtime',
];
const external = [
    ...commonExternal,
    ...Object.keys({ ...dependencies, ...peerDependencies }),
    /node_modules/
];

export default {
    input: './src/index',
    output: {
        format: 'es',
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
        generatedCode: 'es2015'
    },
    plugins: [
        del({ targets: 'dist/*', runOnce: true }),
        resolve({ extensions, preferBuiltins: true }),
        typescript({
            typescript: ts,
            tsconfig: 'tsconfig.json',
            check: false,
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            extensions,
        }),
        json(),
    ],
    external,
};
