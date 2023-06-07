// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {type Pseudoterminal, EventEmitter, type WorkspaceFolder, type Uri, FileType, workspace} from 'vscode';
import {WebContainer, type FileSystem} from "@webcontainer/api";

type PromiseOrAwaited<T extends Promise<any>> = T | Awaited<T>;
type FSEntity = [string, FileType];

class WebContainerTerminal implements Pseudoterminal {
	container = new WebContainer();
	emitter = new EventEmitter<string>();
	input?: WritableStreamDefaultWriter<string>;
	line = '';

	close() {
		this.container.teardown();
	}

	open() {
		this.startShell();
	}

	async fs(base: Uri, parent: string[], result: FileSystem, [name, type]: FSEntity, index?: number, array?: FSEntity[]) {
		if (type === FileType.File) {
			result[name] = {
				file: {
					contents: await workspace.fs.readFile(Uri.joinPath(base, ...parent, name))
				}
			};
		} else if (type === FileType.Directory) {
			if (index !== undefined) {
				parent.push(name);
			}
			result[name] = {
				directory: {}
			};
			await Promise.all(
				workspace.fs.readDirectory(Uri.joinPath(base, ...parent)).then(
					data => data.reduce(
						this.fs.bind(this, base, parent.concat(name)),
						result[name].directory
					)
				)
			);
		}
	}

	async mount() {
		result = {} as FileSystem;

		for (const {uri, name} of workspace.workspaceFolders) {
			await this.fs(uri, [], result, [name, FileType.Directory]);
		}

		await this.container.mount(result);
	}

	lines: string[];

	async handleInput(data: string) {
		if (data === '\r' && this.input) { // Enter
			this.input.write(this.line);
			this.lines.push(this.line);
			this.line = '';
		} else if (data === '\x7f') { // Backspace
			if (line.length) {
				this.line = this.line.slice(
					0, // last one off
					line.length - 1
				);
				// Move cursor backward
				this.emitter.fire('\x1b[D');
				// Delete character
				this.emitter.fire('\x1b[P');
			}
		} else {
			this.line += data;
		}
	}

	onDidWrite = this.emitter.event;

	async startShell() {
		await this.mount();

		const shellProcess = await container.spawn('jsh');
		shellProcess.output.pipeTo(
			new WritableStream<string>({
				write: (data) => {
					this.emitter.fire(data);
				},
			})
		);
		this.input = shellProcess.input.getWriter();
	}
}

export default WebContainerTerminal;
