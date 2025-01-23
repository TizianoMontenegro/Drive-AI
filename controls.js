class Controls{
    constructor(){
        this.forwards = false;
        this.backwards = false;
        this.left = false;
        this.right = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown=e=>{
            switch(e.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowDown":
                    this.backwards=true;
                    break;
                case "ArrowUp":
                    this.forwards=true;
                    break;
            }
            // console.table(this);
        }
        document.onkeyup=e=>{
            switch(e.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forwards=false;
                    break;
                case "ArrowDown":
                    this.backwards=false;
                    break;
            }
            // console.table(this);
        }
    }
}