export class Player{
    constructor(
        public TeamName : String = '',
        public PreferredPosition : String = '',
        public game1 : String = 'undecided',
        public game2 : String = 'undecided',
        public game3 : String = 'undecided',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
// export class Note{
//     constructor(
//         public content : String = '',
//         public created_at: Date = new Date(),
//         public updated_at: Date = new Date()
//     ){}  
    


