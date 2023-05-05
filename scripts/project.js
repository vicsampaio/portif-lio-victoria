function insertProject(){
  const main = document.querySelector('main');

  projetos.map((item) => {
    console.log(item.desc.length);
    let maxLength = 100;
    main.innerHTML += `
    <div class="content-project">
      <img class="img" src="${item.imageProject}" alt="${item.name}">
      <div class="title">
        <h1>${item.name}</h1>
        <p>${item.desc.length > maxLength ? item.desc.slice(0, maxLength) + "..." : item.desc }</p>
        </div>
        <a target="_blank" href="${item.github}">
        <img src="../assets/github.png" alt="GitHub" />
        </a>
    </div>
    `;
  })
}

 insertProject()