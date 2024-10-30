export interface Station {
    solution?: (_:string) => boolean,
    hintSolution?: string,
    pos: {x: number, y:number}
    name: string
    status: number
    desc?: (_:number) => string
    floor: number
}