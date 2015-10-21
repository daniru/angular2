export class VideoGame{
	public name:string;
	public platform: string;
	
	constructor(name, platform){
		this.name = name;
		this.platform = platform;
	}
	
	play(){
		return `Playing... ${this.name} in ${this.platform}`;
	}
}