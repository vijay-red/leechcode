export class Problem {
    Title:string; 
	TitleSlug:string; 
	Content:string;
	Difficulty:string;
	Likes:number;
	Dislikes:number;
	ExampleTestCases:string;
	Hints:string;
    constructor(Title:string,TitleSlug:string,Content:string,Difficulty:string,Likes:number,
        Dislikes:number,
        ExampleTestCases:string,
        Hints:string,)
        {
            this.Title = Title;
            this.TitleSlug = TitleSlug;
            this.Content = Content;
            this.Difficulty = Difficulty;
            this.Likes = Likes;
            this.Dislikes = Dislikes;
            this.ExampleTestCases = ExampleTestCases;
            this.Hints = Hints;

    }

    
}