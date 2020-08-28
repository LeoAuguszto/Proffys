document.querySelector('#add-time')
.addEventListener('click',cloneField)

function cloneField(){
    const newfieldercontainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newfieldercontainer.querySelectorAll('input')

    fields.forEach(function(field) {
        console.log(field)
        field.value=""
    });
    
    document.querySelector('#schedule-items').appendChild(newfieldercontainer)
}