const validateR = (r) =>{
    return isNumber(r) && r >= 2 && r <= 5
}

const isNumber = (number) => {
    return !isNaN(parseInt(number)) || !isNaN(parseFloat(number))
}
const getTableValues = (tableRows) => {
    return [...tableRows].map(row => row.innerText);
}

const init = () => {

    const xRes = getTableValues(document.getElementsByClassName('table-x'));
    const yRes = getTableValues(document.getElementsByClassName('table-y'));
    const rRes = getTableValues(document.getElementsByClassName('table-r'));
    const hitRes = getTableValues(document.getElementsByClassName('table-hit'))
    const createdAtRes = document.getElementsByClassName('table-created-at');

    for (let i = 0; i < xRes.length; i++) {
        addPoint(xRes[i], yRes[i], rRes[i], hitRes[i] === 'true');
        const createdAtTimestamp = Number(createdAtRes[i].innerText);
        const date = new Date(createdAtTimestamp);
        createdAtRes[i].innerText = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }

    const plot = new Plot(document.getElementById('coords-form:r-coord-input').value,
        points,
        document.getElementById("plot").clientHeight,
        document.getElementById("plot").clientWidth);
    document.getElementById('coords-form:r-coord-input').addEventListener("input", (e) => {
        e.preventDefault();
        if(validateR(document.getElementById('coords-form:r-coord-input').value)) {
            plot.r = document.getElementById('coords-form:r-coord-input').value;
        }
    });
}
window.onload = () =>{
    init();
}