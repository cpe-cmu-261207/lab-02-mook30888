
document.addEventListener('DOMContentLoaded' , function() {
    function update() {
        const semester = document.querySelector('#Semester').value
        const list = document.getElementById(semester)
        const li = document.createElement('li')

        let grade = document.createElement('span')
        grade = document.getElementById('gpa')
        let g = grade.options[grade.selectedIndex].text
        let subjectID = document.createElement('span')
        subjectID = document.querySelector('#Class-Name').value
        li.append(subjectID)
        li.append("     ")
        li.append(g)
        list.append(li)

        //per smt
        let gpaSe = "gpa" + semester
        let cSe = "c" + semester
        let csmt = document.getElementById(cSe).innerHTML
        let newGrade = grade.options[grade.selectedIndex].value
        var gpaps = document.getElementById(gpaSe).innerHTML
        gpaps = (Number(gpaps) *Number(csmt) ) + Number(newGrade)
        csmt = Number(csmt) + 1
        gpaps = Number(gpaps) / Number(csmt)
        document.getElementById(gpaSe).innerHTML = String(gpaps)
        document.getElementById(cSe).innerHTML = String(csmt)

        //gpaAll
        let gx = document.getElementById("gpaAll").innerHTML
        let cx = document.getElementById("cx").innerHTML
        gx = (Number(gx) * Number(cx)) + Number(newGrade)
        cx = Number(cx) + 1
        gx = Number(gx) / Number(cx)
        document.getElementById("gpaAll").innerHTML = String(gx)
        document.getElementById("cx").innerHTML = String(cx)

        //gpaCPE
        var subj = subjectID.substr(0,3)
        if(subj == "261" || subj == "269"){
            let gcpe = document.getElementById("gpaCPE").innerHTML
            let ccpe = document.getElementById("cCPE").innerHTML
            gcpe = (Number(gcpe) * Number(ccpe)) + Number(newGrade)
            ccpe = Number(ccpe) + 1
            gcpe = Number(gcpe) / Number(ccpe)
            document.getElementById("gpaCPE").innerHTML = String(gcpe)
            document.getElementById("cCPE").innerHTML = String(ccpe)
        }

        return false
    }
    document.querySelector('form').onsubmit = update
})