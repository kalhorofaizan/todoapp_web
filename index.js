function addtodo() {
    value = document.getElementById("todo").value;
    document.getElementById("todo").value = "";
    main = document.createElement("div");
    main.classList.add("row");
    div1 = document.createElement("div");
    div1.classList.add("col-sm-0");
    div1.classList.add("col-0");
    div1.classList.add("col-lg-2");
    div1.classList.add("col-md-2");
    div2 = document.createElement("div");
    div2.className = "col-sm-8   col-10";
    div3 = document.createElement("div");
    div3.className = "todobox mt-3";
    span1 = document.createElement("span");
    span1.innerHTML = value;
    dbt = document.createElement("button");
    dbt.className = "btn btn-danger ml-auto";
    dbt.setAttribute("onClick", "deletelist(this)")
    dbt.innerHTML = "Delete";
    ebt = document.createElement("button");
    ebt.className = "btn btn-secondary  ml-2";
    ebt.innerHTML = "edit";
    ebt.setAttribute("onClick", "edit(this)")
    main.appendChild(div1);
    div3.appendChild(span1);
    div3.appendChild(dbt);
    div3.appendChild(ebt);
    div2.appendChild(div3);
    main.appendChild(div2);
    main.appendChild(div1);
    document.getElementById("todolist").appendChild(main)
}

function deletelist(e) {
    e.parentNode.remove()
}

function edit(e) {
    document.getElementById("todo").value = e.parentNode.firstChild.innerHTML;
    e.parentNode.remove()
}