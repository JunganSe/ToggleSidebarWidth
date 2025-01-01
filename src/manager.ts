import * as vscode from 'vscode';
import { SidebarWidthWorker } from './worker';

export class SidebarWidthManager {
    private readonly context: vscode.ExtensionContext;
    private readonly worker: SidebarWidthWorker;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.worker = new SidebarWidthWorker(context);
    }

    public toggleWidth() {
        // TODO: Implement toggle.
        console.log('toggleWidth activated');
    }

    public restoreDefaultWidth() {
        // TODO: Implement restoreDefaultWidth.
        console.log('restoreDefaultWidth activated');
    }

    public restoreStoredWidth() {
        // TODO: Implement restoreStoredWidth.
        console.log('restoreStoredWidth activated');
    }
}