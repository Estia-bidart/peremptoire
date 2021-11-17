interface ICocktail {
    id: number,
    user_id: number,
    nom: string,
    recette: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: null | string
}

interface ICoktails extends Array<ICocktail> { }

export interface ICocktailss {
    [index: number]: {
        id: number,
        user_id: number,
        nom: string,
        recette: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        deletedAt: null | string
    }
}

export interface ICocktailsss extends ICocktailss{
    data: ICocktailss
}