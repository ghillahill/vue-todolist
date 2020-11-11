var app = new Vue({
    el: '#root',
    data: {
        //Lista todo-items
        item_list: [
            'Fare la spesa',
            'Pulire casa',
            'Mangiare',
            'Coding time!'
        ],
        new_item: '',
        index: ''
    },
    methods: {
        //Funzione che aggiunge elemento scritto su Input nell'array item_list
        addNewTodo(){
            this.item_list.push(this.new_item);
        },
        //Creo funzione che al click di un elemento di item_list venga rimosso.
        removeItem(index){
            this.$delete(this.item_list, index);
        },
        //Creo funzione per aggiungere elemento ad array item_list alla pressione del tasto Enter
        addOnEnter(e){
            //keyCode 13 è l'id del tasto Enter
            if (e.keyCode === 13) {
                this.item_list.push(this.new_item);
            }
        }
    }
});
