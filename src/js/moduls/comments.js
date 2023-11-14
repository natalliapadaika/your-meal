export const addComment = () => {
    const form = document.querySelector('.comment');
    const input = form.querySelector('input');
    const div = document.querySelector('.comments');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        div.innerHTML += `<p>${input.value}</p>`
    })
}