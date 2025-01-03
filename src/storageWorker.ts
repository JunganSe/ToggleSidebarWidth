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
        return this.getNumber(KEY_STORED_WIDTH);
    }

    setStoredWidth(width: number): void {
        this.setNumber(KEY_STORED_WIDTH, width);
    }

    private getNumber(key: string): number {
        const storedValue = this.context.workspaceState.get(key);
        return Number(storedValue);
    }

    private setNumber(key: string, value: number): void {
        this.context.workspaceState.update(key, value);
    }
}