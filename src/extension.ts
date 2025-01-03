import { SidebarWidthManager } from 'src/manager';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const manager = new SidebarWidthManager(context);
    registerCommand(context, 'toggle-sidebar-width.toggleWidth', manager.toggleWidth);
    registerCommand(context, 'toggle-sidebar-width.restoreDefaultWidth', manager.restoreDefaultWidth);
    registerCommand(context, 'toggle-sidebar-width.restoreStoredWidth', manager.restoreStoredWidth);
}

function registerCommand(context: vscode.ExtensionContext, command: string, callback: () => void) {
    const disposable = vscode.commands.registerCommand(command, callback);
    context.subscriptions.push(disposable);
}

export function deactivate() { }
