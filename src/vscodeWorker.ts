import { log } from 'console';
import * as vscode from 'vscode';

export class VscodeWorker {
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    getSidebarWidth(): number {
        // TODO: Implement getSidebarWidth.
        const tempWidth = 500;
        log('getSidebarWidth', tempWidth);
        return Number(tempWidth);
    }

    setSidebarWidth(width: number): void {
        // TODO: Implement setSidebarWidth.
        log('setSidebarWidth', width);
    }
}