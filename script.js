const btnAdd = document.querySelector(".btn-add");
const inputTitle = document.getElementById("title");
const listTasks = document.getElementById("list-tasks");
const inputDescription = document.getElementById("description");
const modal = document.getElementById("modal-container");
const btnCloseModal = document.getElementsByClassName("close")[0];

const handleCheck = (e) => {
	let task = e.currentTarget.parentNode.parentNode;
	let btn = e.currentTarget;

	task.classList.toggle("finished");
	if (task.classList.contains("finished")) {
		btn.innerHTML = `<i class="bi bi-clipboard-check"></i>`;
	} else {
		btn.innerHTML = `<i class="bi bi-clipboard-x"></i>`;
	}
};

const handleShow = (e) => {
	let btn = e.currentTarget;
	let task = e.currentTarget.parentNode.parentNode;
	let title = task.getElementsByTagName("p")[0].textContent;
	let description = task.getElementsByTagName("p")[1].textContent;
	modal.getElementsByTagName("h2")[0].textContent = title;
	modal.getElementsByTagName("p")[0].textContent = description;

	modal.style.display = "flex";
	btn.innerHTML = `<i class="bi bi-eye-slash"></i>`;
};

const handleRemove = (e) => {
	let task = e.currentTarget.parentNode.parentNode;
	task.remove();
};

const addTask = () => {
	if (inputTitle.value && inputDescription.value) {
		let task = document.createElement("div");
		task.classList.add("task");

		let title = document.createElement("p");
		title.textContent = inputTitle.value;

		let description = document.createElement("p");
		description.textContent = inputDescription.value;
		description.style.display = "none";

		let btnContainer = document.createElement("div");
		btnContainer.classList.add("btn-container");

		let btnCheck = document.createElement("button");
		btnCheck.classList.add("btn-check");
		btnCheck.innerHTML = `<i class="bi bi-clipboard-x"></i>`;
		btnCheck.addEventListener("click", handleCheck);

		let btnShow = document.createElement("button");
		btnShow.classList.add("btn-show");
		btnShow.innerHTML = `<i class="bi bi-eye"></i>`;
		btnShow.addEventListener("click", handleShow);

		let btnRemove = document.createElement("button");
		btnRemove.classList.add("btn-remove");
		btnRemove.innerHTML = `<i class="bi bi-trash3"></i>`;
		btnRemove.addEventListener("click", handleRemove);

		btnContainer.append(btnCheck, btnShow, btnRemove);
		task.append(title, description, btnContainer);

		listTasks.appendChild(task);
	} else {
		alert("completa los campos");
	}
};

btnCloseModal.addEventListener("click", function () {
	modal.style.display = "none";
});

window.addEventListener("click", function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
});

btnAdd.addEventListener("click", addTask);
