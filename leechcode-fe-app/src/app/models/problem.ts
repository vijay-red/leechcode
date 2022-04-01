export class Problem {
    
    title:string; 
	titleSlug:string; 
	content:string;
	difficulty:string;
	likes:number;
	dislikes:number;
	exampleTestCases:string;
	hints:string;
    constructor(title:string,titleSlug:string,content:string,difficulty:string,likes:number,
        dislikes:number,
        exampleTestCases:string,
        hints:string,)
        {
            
            this.title = title;
            this.titleSlug = titleSlug;
            this.content = content;
            this.difficulty = difficulty;
            this.likes = likes;
            this.dislikes = dislikes;
            this.exampleTestCases = exampleTestCases;
            this.hints = hints;

    }

    
}