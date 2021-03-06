import {ResolveOptions} from "./util/resolve-path";
import {TS} from "../type/ts";

export interface CjsToEsmOptions {
	typescript?: typeof TS;
	debug?: boolean | string | ((file: string) => boolean);
	readFile?: ResolveOptions["readFile"];
	fileExists?: ResolveOptions["fileExists"];
}
