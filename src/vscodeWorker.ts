import * as vscode from 'vscode';

export class VscodeWorker {
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    getSidebarWidth(): number {
        // TODO: Implement getSidebarWidth.
        return -1;
    }

    setSidebarWidth(width: number): void {
        // TODO: Implement setSidebarWidth.
    }
}