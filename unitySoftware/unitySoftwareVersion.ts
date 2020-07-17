import { ISoftwareVersion } from "../int/ISoftwareVersion";

// concret class for ISoftwareVersion interface.
// should point to a specific release name and version as well as where to download them from
// for all three supported platforms ..

export class unitySoftwareVersion implements ISoftwareVersion {
    
    softwareName : string;
    softwareVersion : string;

    getDownloadUrl() : string {
        return this.downloadUrls[process.platform];
    }

     downloadUrls = {
        'darwin': ' .... ',
        'linux':  ' ... ',
        'win32': ' ... '
    };
}