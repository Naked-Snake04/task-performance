const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
let items = [];

function addContacts() {
  const fragment = document.createDocumentFragment();
  items = Array.from(contacts.getElementsByClassName("contact"));
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", (e) => {
  let calc = Math.floor(contacts.scrollTop / 18);
  if (calc !== -1) {
    stickyHeader.textContent = items[calc].textContent;
  }
});

addContacts();