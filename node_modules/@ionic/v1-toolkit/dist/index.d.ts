/// <reference types="node" />
import { CommandMap, Namespace } from '@ionic/cli-framework';
export declare class IonicV1Namespace extends Namespace {
    getMetadata(): Promise<{
        name: string;
        summary: string;
    }>;
    getCommands(): Promise<CommandMap>;
}
export declare function run(argv: string[], env: NodeJS.ProcessEnv): Promise<void>;
