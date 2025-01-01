import * as vscode from 'vscode';
import { restoreDefaultWidth, restoreStoredWidth, toggleWidth } from './commands';

export function activate(context: vscode.ExtensionContext) {
    registerCommand(context, 'toggle-sidebar-width.toggleWidth', () => {
        toggleWidth(context);
    });

    registerCommand(context, 'toggle-sidebar-width.restoreDefaultWidth', () => {
        restoreDefaultWidth(context);
    });

    registerCommand(context, 'toggle-sidebar-width.restoreStoredWidth', () => {
        restoreStoredWidth(context);
    });
}

function registerCommand(context: vscode.ExtensionContext, command: string, callback: () => void) {
	const disposable = vscode.commands.registerCommand(command, callback);
	context.subscriptions.push(disposable);
}

export function deactivate() {}
