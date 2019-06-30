import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import getPreprocessor from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';
import includePaths from 'rollup-plugin-includepaths';
import path from 'path';
const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const postcssPlugins = (purge = false) => {
	return [
		require("postcss-import")(),
		require("postcss-url")(),
		require("postcss-nesting")(),
		require("postcss-custom-properties")(),
		require("tailwindcss")("./tailwind.config.js"),
		require("autoprefixer")(),
		purge &&
		require('cssnano')({
			preset: 'default',
		}),
		// Do not purge the CSS in dev mode to be able to play with classes in the browser dev-tools.
		purge &&
		require('@fullhuman/postcss-purgecss')({
			content: ['./**/*.svelte'],
			extractors: [
				{
					extractor: content => {
						const fromClasses = content.match(/class:[A-Za-z0-9-_]+/g) || [];

						return [
							...content.match(/[A-Za-z0-9-_:\/]+/g) || [],
							...fromClasses.map(c => c.replace('class:')),
						];
					},

					// Specify the file extensions to include when scanning for
					// class names.
					extensions: ['svelte'],
				},
			],
			// Whitelist selectors to stop Purgecss from removing them from your CSS.
			whitelist: [
				'html', 'body', 'ripple-gray', 'ripple-primary',
				'cursor-pointer', 'navigation:hover',
				'navigation.selected', 'outline-none', 'text-xs',
				'transition'
			],
			whitelistPatterns: [/bg-gray/, /text-gray/, /yellow-a200/],
		}),
	].filter(Boolean)
}

const preprocess = getPreprocessor({
	transformers: {
		postcss: {
			plugins: postcssPlugins() // Don't need purgecss because Svelte handle unused css for you.
		}
	}
});

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess
			}),
			resolve(),
			commonjs(),
			includePaths({ paths: ["./src"] }),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev,
				preprocess
			}),
			resolve(),
			includePaths({ paths: ["./src"] }),
			commonjs(),
			postcss({
				plugins: postcssPlugins(!dev),
				extract: path.resolve(__dirname, './static/global.css')
			})
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		]
	}
};
