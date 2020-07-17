import { ISoftware } from "../int/ISoftware";
import { ISoftwareVersion } from '../int/ISoftwareVersion';
import { IInstallationResult } from '../int/IInstallationResult';
import { IDownloadResult } from '../int/IDownloadResult';


// a concrete class implementing the API for unity Editor software ..
// when this is implemented it can be shared across the teams
// also any other software that we wish to manage its installation
// should implement the ISoftware interface 
export class unitySoftware implements ISoftware {

    getAvailableOnlineVersions(): Promise<ISoftwareVersion[]> {
        return new Promise((resolve, reject) => {
            // todo 
        });
    }

    download(version: ISoftwareVersion): Promise<IDownloadResult> {
        return new Promise((resolve, reject) => {
            // todo 
        });
    }

    install(localPath: string): Promise<IInstallationResult> {
        return new Promise((resolve, reject) => {
            // todo 
        });
    }

    uninstall(localPath: string): Promise<IInstallationResult> {
        return new Promise((resolve, reject) => {
            // todo 
        });
    }
}
