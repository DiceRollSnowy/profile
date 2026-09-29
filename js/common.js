// ヘッダー読み込み
async function loadHeader()
{
    const header = document.getElementById("header");
    if (!header)
    {
        return;
    }

    const response = await fetch("components/header.html");
    if (!response.ok) 
    {
        console.error("ヘッダーの読み込みに失敗しました");
        return;
    }
    header.innerHTML = await response.text();

    setActiveNav();
    setupMenu();
}

// フッター読み込み
async function loadFooter()
{
    const footer = document.getElementById("footer");
    if (!footer)
    {
        return;
    }

    const response = await fetch("components/footer.html");
    if (!response.ok) 
    {
        console.error("フッターの読み込みに失敗しました");
        return;
    }
    footer.innerHTML = await response.text();
}

// ヘッダー：ナビゲーションの表示
function setActiveNav() 
{
    const currentPage = document.body.dataset.page;

    // data-page がないページは active を付けない
    if (!currentPage) {
        return;
    }

    document.querySelectorAll(".site-nav a").forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }
    });
}

// ヘッダー：スマホ用メニューの表示
function setupMenu() 
{
    const menuButton = document.getElementById("menuButton");
    const menuCloseButton = document.getElementById("menuCloseButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuButton || !menuCloseButton || !mobileMenu) 
    {
        return;
    }

    function openMenu() {
        mobileMenu.classList.add("is-open");

        menuButton.setAttribute("aria-expanded", "true");

        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        mobileMenu.classList.remove("is-open");

        menuButton.setAttribute("aria-expanded", "false");

        document.body.style.overflow = "";
    }

    // ☰
    menuButton.addEventListener("click", openMenu);

    // ×
    menuCloseButton.addEventListener("click", closeMenu);

    // メニューを選択したら閉じる
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

loadHeader();
loadFooter();
