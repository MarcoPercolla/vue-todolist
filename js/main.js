const { createApp } = Vue;

const tasks = {
    data: function () {
        return {
            
            newTask: "",

            toDolist: [
                {
                    text: "fare la spesa",
                    done: false,
                },
                {
                    text: "pulire la stanza",
                    done: true,
                },
                {
                    text: "andare in palestra",
                    done: false,
                },
                {
                    text: "preparare la cena",
                    done: false,
                },
                {
                    text: "portare fuori il cane",
                    done: true,
                },
                {
                    text: "fare l'esercitazione",
                    done: false,
                },
            ],
        }

    },
    methods: {
        addTask() {
            let newTask = {
                text: this.newTask,
                done: false,
            };
            this.toDolist.push(newTask);
            this.newTask = "";
        },
        changeStatus(i) {
            console.log(this.toDolist[i].done);
            if (this.toDolist[i].done) {
                this.toDolist[i].done = false;
            } else {
                this.toDolist[i].done = true;
            }
              
        },
        removeDone() {
            let fatti = document.querySelectorAll(".fatto");
            console.log(fatti);
            fatti.forEach(element => {
                element.classList.add("nascosto")
            });
            
        },
        showDone() {
            let nascosti = document.querySelectorAll(".nascosto");
            console.log(nascosti);
            nascosti.forEach(element => {
                element.classList.remove("nascosto");
            });
        }

    },
    mounted() {
        console.log("ok");

    },
};

createApp(tasks).mount('#app')
