function countClick(counterId) {
    let counter = document.getElementById(counterId);
    let count = parseInt(counter.innerText);
    counter.innerText = count + 1;
}
