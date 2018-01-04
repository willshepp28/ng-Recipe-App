
// a model is a blueprint for object we create and a typescript class does this
export class Recipe {
    // how a recipe should look like

    public name: string;
    public description: string;
    public imagePath: string;


    // we add a constructor so we can instantion class
    constructor(name: string, description:string, imagePath:string){

        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

}