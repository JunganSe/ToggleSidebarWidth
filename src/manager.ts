import { log } from 'console';
import * as vscode from 'vscode';
import { DEFAULT_DEFAULT_WIDTH, DEFAULT_STORED_WIDTH } from './constants';
import { StorageWorker } from './storageWorker';
import { VscodeWorker } from './vscodeWorker';

let self: SidebarWidthManager;

export class SidebarWidthManager {
    private readonly storageWorker: StorageWorker;
    private readonly vscodeWorker: VscodeWorker;

    constructor(context: vscode.ExtensionContext) {
        self = this;
        this.storageWorker = new StorageWorker(context);
        this.vscodeWorker = new VscodeWorker(context);
    }

    public toggleWidth() {
        log('toggleWidth');
        const currentWidth = self.vscodeWorker.getSidebarWidth();
        const defaultWidth = self.storageWorker.getDefaultWidth() || DEFAULT_DEFAULT_WIDTH;

        if (currentWidth === defaultWidth)
            self.restoreStoredWidth();
        else
            self.restoreDefaultWidth();
    }

    public restoreDefaultWidth() {
        log('restoreDefaultWidth');
        const currentWidth = self.vscodeWorker.getSidebarWidth();
        const defaultWidth = self.storageWorker.getDefaultWidth() || DEFAULT_DEFAULT_WIDTH;

        if (currentWidth !== defaultWidth) {
            self.storageWorker.setStoredWidth(currentWidth);
            self.vscodeWorker.setSidebarWidth(defaultWidth);
        }
    }

    public restoreStoredWidth() {
        log('restoreStoredWidth');
        const currentWidth = self.vscodeWorker.getSidebarWidth();
        const storedWidth = self.storageWorker.getStoredWidth() || DEFAULT_STORED_WIDTH;;

        if (currentWidth !== storedWidth)
            self.vscodeWorker.setSidebarWidth(storedWidth);
    }
}