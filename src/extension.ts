import {window, commands, type ExtensionContext, type Terminal} from "vscode";
import WebContainerTerminal from "./terminal";

let terminal: Terminal;

export function activate(context: ExtensionContext) {
    terminal = window.createTerminal({
        name: "WebContainer",
        pty: new WebContainerTerminal()
    });

    context.subscriptions.push(
        commands.registerCommand(
            "webcontainer.launch",
            terminal.show
        )
    );
}

export function deactivate() {
    terminal.hide();
}