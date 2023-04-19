function insertProject(){
  const main = document.querySelector('main');

  projetos.map((item) => {
    main.innerHTML += `
    <div class="content-project">
      <img src="${item.imageProject}" alt="${item.name}">
      <div>
        <h1>${item.name}</h1>
        <p>${item.desc}</p>
      </div>
    </div>
    `;
  })
}

 insertProject()