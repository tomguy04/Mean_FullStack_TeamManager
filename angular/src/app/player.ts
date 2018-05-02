export class Player{
        public id:number;
        public TeamName : String = '';
        public PreferredPosition : String = '';
        public game1 : String = 'undecided';
        public game2 : String = 'undecided';
        public game3 : String = 'undecided';
        public created_at: Date = new Date();
        public updated_at: Date = new Date()
        constructor(createId = true){
            if (createId){
                this.id = Math.floor(Math.random() * 1000); //dev purposes til we have a db.
            }
        }
    }

// export class Player{
//     constructor(
//         public TeamName : String = '',
//         public PreferredPosition : String = '',
//         public game1 : String = 'undecided',
//         public game2 : String = 'undecided',
//         public game3 : String = 'undecided',
//         public created_at: Date = new Date(),
//         public updated_at: Date = new Date()
//     ){}
// }


