import { log } from 'console';
import * as vscode from 'vscode';
import { KEY_DEFAULT_WIDTH, KEY_STORED_WIDTH } from './constants';

export class StorageWorker {
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    getDefaultWidth(): number {
        const value = vscode.workspace
            .getConfiguration()
            .get<number>(KEY_DEFAULT_WIDTH);
        log('getDefaultWidth', value);
        return Number(value);
    }

    getStoredWidth(): number {
        const storedValue = this.context.workspaceState.get(KEY_STORED_WIDTH);
        log('getStoredWidth', storedValue);
        return Number(storedValue);
    }

    setStoredWidth(width: number): void {
        log('setStoredWidth', width);
        this.context.workspaceState.update(KEY_STORED_WIDTH, width);
    }
}