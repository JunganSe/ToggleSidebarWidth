import { KEY_DEFAULT_WIDTH, KEY_STORED_WIDTH } from 'src/constants';
import * as vscode from 'vscode';

export class StorageWorker {
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    getDefaultWidth(): number {
        const value = vscode.workspace
            .getConfiguration()
            .get<number>(KEY_DEFAULT_WIDTH);
        console.log('getDefaultWidth', value);
        return Number(value);
    }

    getStoredWidth(): number {
        const storedValue = this.context.workspaceState.get(KEY_STORED_WIDTH);
        console.log('getStoredWidth', storedValue);
        return Number(storedValue);
    }

    setStoredWidth(width: number): void {
        console.log('setStoredWidth', width);
        this.context.workspaceState.update(KEY_STORED_WIDTH, width);
    }
}