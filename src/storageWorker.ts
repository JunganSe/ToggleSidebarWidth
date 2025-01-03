import * as vscode from 'vscode';
import { KEY_DEFAULT_WIDTH, KEY_STORED_WIDTH } from './constants';

export class StorageWorker{
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    getDefaultWidth(): number {
        const value = vscode.workspace
            .getConfiguration()
            .get<number>(KEY_DEFAULT_WIDTH);
        return Number(value);
    }

    getStoredWidth(): number {
        const storedValue = this.context.workspaceState.get(KEY_STORED_WIDTH);
        return Number(storedValue);
    }

    setStoredWidth(width: number): void {
        this.context.workspaceState.update(KEY_STORED_WIDTH, width);
    }
}