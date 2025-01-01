import * as vscode from 'vscode';
import { StorageWorker } from './storageWorker';

export class SidebarWidthManager {
    private readonly context: vscode.ExtensionContext;
    private readonly storageWorker: StorageWorker;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.storageWorker = new StorageWorker(context);
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