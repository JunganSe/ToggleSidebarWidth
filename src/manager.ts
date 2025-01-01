import * as vscode from 'vscode';
import { StorageWorker } from './storageWorker';
import { VscodeWorker } from './vscodeWorker';
import { DEFAULT_DEFAULT_WIDTH, DEFAULT_STORED_WIDTH } from './constants';

export class SidebarWidthManager {
    private readonly storageWorker: StorageWorker;
    private readonly vscodeWorker: VscodeWorker;

    constructor(context: vscode.ExtensionContext) {
        this.storageWorker = new StorageWorker(context);
        this.vscodeWorker = new VscodeWorker(context);
    }

    public toggleWidth() {
        const currentWidth = this.vscodeWorker.getSidebarWidth();
        const defaultWidth = this.storageWorker.getDefaultWidth() ?? DEFAULT_DEFAULT_WIDTH;

        if (currentWidth === defaultWidth) {
            this.restoreStoredWidth();
        } else {
            this.restoreDefaultWidth();
        }
    }

    public restoreDefaultWidth() {
        const currentWidth = this.vscodeWorker.getSidebarWidth();
        const defaultWidth = this.storageWorker.getDefaultWidth() ?? DEFAULT_DEFAULT_WIDTH;

        if (currentWidth !== defaultWidth) {
            this.storageWorker.setStoredWidth(currentWidth);
            this.vscodeWorker.setSidebarWidth(defaultWidth);
        }
    }

    public restoreStoredWidth() {
        const currentWidth = this.vscodeWorker.getSidebarWidth();
        const storedWidth = this.storageWorker.getStoredWidth() ?? DEFAULT_STORED_WIDTH;;

        if (currentWidth !== storedWidth) {
            this.vscodeWorker.setSidebarWidth(storedWidth);
        }
    }
}