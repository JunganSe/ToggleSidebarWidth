import { log } from 'console';
import { DEFAULT_DEFAULT_WIDTH, DEFAULT_STORED_WIDTH } from 'src/constants';
import { StorageWorker } from 'src/storageWorker';
import { VscodeWorker } from 'src/vscodeWorker';
import * as vscode from 'vscode';

let self: SidebarWidthManager;

export class SidebarWidthManager {
    private readonly storageWorker: StorageWorker;
    private readonly vscodeWorker: VscodeWorker;

    constructor(context: vscode.ExtensionContext) {
        self = this;
        this.storageWorker = new StorageWorker(context);
        this.vscodeWorker = new VscodeWorker(context);
    }

    toggleWidth() {
        log('toggleWidth');
        const currentWidth = self.vscodeWorker.getSidebarWidth();
        const defaultWidth = self.storageWorker.getDefaultWidth() || DEFAULT_DEFAULT_WIDTH;

        if (currentWidth === defaultWidth)
            self.restoreStoredWidth();
        else
            self.restoreDefaultWidth();
    }

    restoreDefaultWidth() {
        log('restoreDefaultWidth');
        const currentWidth = self.vscodeWorker.getSidebarWidth();
        const defaultWidth = self.storageWorker.getDefaultWidth() || DEFAULT_DEFAULT_WIDTH;

        if (currentWidth !== defaultWidth) {
            self.storageWorker.setStoredWidth(currentWidth);
            self.vscodeWorker.setSidebarWidth(defaultWidth);
        }
    }

    restoreStoredWidth() {
        log('restoreStoredWidth');
        const currentWidth = self.vscodeWorker.getSidebarWidth();
        const storedWidth = self.storageWorker.getStoredWidth() || DEFAULT_STORED_WIDTH;;

        if (currentWidth !== storedWidth)
            self.vscodeWorker.setSidebarWidth(storedWidth);
    }
}