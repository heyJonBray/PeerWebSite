/*jshint esnext: true */

import {MasterHelper} from 'SharedHelper/Prototype/Helper/MasterHelper.js';

export class Helper extends MasterHelper {
	/**
	 * creates id's from files (api Hook)
	 * 
	 * @param {FileList} files 
	 * @returns 
	 * @memberof Helper
	 */
	createFilesId(files){
		if (!files.length) return this.getHash(`${files.lastModified}${files.name}${files.size}`);
		let str = '';
		for(let file of files){
			str += `${file.lastModified}${file.name}${file.size}`;
		}
		return this.getHash(str);
	}
	getHash(str){
		let hash = 0, i, chr;
		for(i = 0; i < str.length; i++){
			chr   = str.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return Math.abs(hash);
	}
}