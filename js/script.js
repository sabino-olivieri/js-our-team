const rowElem = document.querySelector(".row");

for(let i = 0; i < team.length; i++) {

    const curItem = team[i];
    
    console.log(curItem.name);
    console.log(curItem.role);
    console.log(curItem.photo);
    console.log("-------------");

    rowElem.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 d-flex  justify-content-center">
    <div class="card w-75 rounded-0 border-0">
        <img src="./img/${curItem.photo}" class="card-img-top rounded-0" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${curItem.name}</h5>
            <p class="card-text text-center">${curItem.role}</p>
        </div>
    </div>
</div>`



}