import * as vscode from 'vscode';

export class SidebarWidthWorker{
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    getDefaultWidth(): number {
        // TODO: Implement getDefaultWidth.
        return -1;
    }

    setDefaultWidth(width: number): void {
        // TODO: Implement setDefaultWidth.
    }

    getStoredWidth(): number {
        // TODO: Implement getStoredWidth.
        return -1;
    }

    setStoredWidth(width: number): void {
        // TODO: Implement setStoredWidth.
    }
}