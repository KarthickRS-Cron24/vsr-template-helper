// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 * 
 * bfi2h5ncan5opvbthsttafgzf5r7pz4ykpzyui26pjuew3oogvmq
 * 
 */
"use strict";
async function activate(context) {

	vscode.window.showInformationMessage('Thank you for using VSR Template Helper!');

	const helpDocs = [
		{ label: 'VSR Template Docs', detail: 'Virtual Scalable and Reusable Templates for building mockups for UI development', link: 'http://zcrm-ui-imac:8888/Ui-team/mock_templates/documentation/#/' },
		{ label: 'LYTE References', link: 'https://lyte.csez.zohocorpin.com/home' },
		{ label: 'CRUX References', link: 'http://crux-components/component/introduction' },
		{ label: 'CRM UI Component Docs', link: 'http://zcrm-ui-imac:8888/Ui-team/GowriPrasanth/crm-ui-components/' },
		{ label: 'CRM Color & Font Docs', link: 'http://zcrm-ui-imac:8888/Ui-team/Muneeshwaran/2021/crm-component-help-doc/' },
		{ label: 'CRM Icon Docs', link: 'http://zcrm-ui-imac:8888/Ui-team/Muneeshwaran/2021/crm-icon-helpdoc/' },
		{ label: 'CRM Base Class Docs', link: 'http://zcrm-ui-imac:8888/Ui-team/vijay/Base%20Docs/#/home' },
	];

	vscode.commands.registerCommand('vsr-template-helper.helpDocs', async function () {
		let doc = await vscode.window.showQuickPick(helpDocs, {
			matchOnDetail: true,
		})
		if (doc == null) return
		vscode.env.openExternal(doc.link);
	});
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
