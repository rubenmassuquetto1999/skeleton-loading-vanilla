const users = [
    {
        id: 1,
        name: "Maria Silva",
        avatar: "https://i.pravatar.cc/60?img=1",
        bio: "Desenvolvedora Full Stack apaixonada por criar experiências incríveis para usuários."
    },
    {
        id: 2,
        name: "João Santos",
        avatar: "https://i.pravatar.cc/60?img=3",
        bio: "UI/UX Designer focado em criar interfaces bonitas e funcionais."
    },
    {
        id: 3,
        name: "Ana Costa",
        avatar: "https://i.pravatar.cc/60?img=5",
        bio: "Tech Lead com 10 anos de experiência em projetos de alta escala."
    }
];

const loadBtn = document.querySelector(".load-btn");
const cardsContainer = document.querySelector(".cards-container");

function createSkeleton() {
    return `
        <div class="card">
            <div class="skeleton skeleton-card"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text short"></div>
            </div>
        </div>
    `;
}

function createUser(user) {
    return `
        <div class="card">
            <img class="avatar" src="${user.avatar}" alt="Avatar de ${user.name}">
            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        </div>
    `;
}

function loadData() {
    loadBtn.disabled = true;
    loadBtn.textContent = "Carregando...";

    cardsContainer.innerHTML = users.map(createSkeleton).join("");

    setTimeout(() => {
        cardsContainer.innerHTML = users.map(createUser).join("");
        loadBtn.disabled = false;
        loadBtn.textContent = "Recarregar";
    }, 2000);
}

loadBtn.addEventListener("click", loadData);