'use strict';
const foregroundColor = '#f9f9ff';
const backgroundColor = '#0a0412';
const mainColor = '#0049ff';

const lightDark = '#2d2735';
const light = '#f9f9ff';

const green = '#73f09c';
const red = '#f55250';
const cyan = '#7de4fe';
const blue = '#327bff';
const magenta = blue;
const yellow = '#f1e985';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#000',
	cursorColor: '#0049ff',
	cursorShape: 'BEAM',
	colors: {
		black: backgroundColor,
		green,
		red,
		cyan,
		blue,
		magenta,
		yellow,
		white: light,
		lightRed: red,
		lightGreen: green,
		lightCyan: blue,
		lightBlue: blue,
		lightMagenta: magenta,
		lightYellow: yellow,
		lightBlack: lightDark,
		lightWhite: foregroundColor
	},
	css: `
		${config.css}

		.header_header {
			background: #110b19;
			color: ${backgroundColor};
		}

		.term_fit:not(.term_term) {
			opacity: 0.6;
		}
		.term_fit.term_active {
			opacity: 1;
			will-change: opacity;
		}

		.tabs_borderShim {
			display: none;
		}
		.tab_tab {
			border: none;
		}
		.tab_tab::before {
			background-color: ${mainColor};
			position: absolute;
			bottom: 0;
			right: 0;
			left: 0;
			height: 3px;
			content: '';
			opacity: 0;
			visibility: hidden;
		}

		.tab_tab.tab_active {
			color: white;
			background: #191321;
		}
		.tab_tab.tab_active:before {
			opacity: 1;
			visibility: visible;
		}

	`
});
