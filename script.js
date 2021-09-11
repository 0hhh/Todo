document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert("Please enter text");
    }
    else{
        document.querySelector('#tasks').innerHTML+= 
        `
        <div class="task">
                <span id="taskname">
        ${document.querySelector(
                '#newtask input'
                ).value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt "></i>
                </button>
        </div>
        `;
        var deletethis = document.querySelectorAll('.delete');
        for (var i = 0;i<deletethis.length;i++) {
            deletethis[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        var completethis = document.querySelectorAll('.task');
        for (var i = 0;i<completethis.length;i++) {
            completethis[i].onclick = function() {
                this.classList.toggle("completed");
            }
        }
    }
}