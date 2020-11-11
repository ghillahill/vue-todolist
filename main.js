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
        new_item: ''
    },
    methods: {
        //Funzione che aggiunge elemento scritto su Input nell'array item_list
        addNewTodo(){
            this.item_list.push(this.new_item);
        }
    },
});
