import * as vscode from 'vscode';

export class VscodeWorker {
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    getSidebarWidth(): number {
        // TODO: Implement getSidebarWidth.
        const tempWidth = 500;
        console.log('getSidebarWidth', tempWidth);
        return Number(tempWidth);
    }

    setSidebarWidth(width: number): void {
        // TODO: Implement setSidebarWidth.
        console.log('setSidebarWidth', width);
    }
}