document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const nestedList = event.target.querySelector('ul');
            if (nestedList) {
                nestedList.classList.toggle('hide');
            }
        }
    });
})
