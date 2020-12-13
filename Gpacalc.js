document.addEventListener('DOMContentLoaded' , function() {
    function update() {

        const list = document.createElement('li')
        list.innerHTML = 'Class Name : ' +  document.querySelector('#Class-Name').value +' Semester : ' + document.querySelector('#Semester').value +' Grade : ' + document.querySelector('#Grade').value
        const task = document.querySelector('ul')
        task.append(list)
        return false

        
    }
    document.querySelector('form').onsubmit = update
})