document.addEventListener('DOMContentLoaded' , function() {
    function update() {

        const list = document.createElement('li')
        list.innerHTML = document.querySelector('#Class-Name').value
        const task = document.querySelector('ul')
        task.append(list)
        return false

        
    }
    document.querySelector('form').onsubmit = update
})