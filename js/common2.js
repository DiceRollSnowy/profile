// フッター読み込み
async function loadFooter2()
{
    const footer = document.getElementById("footer");
    if (!footer)
    {
        return;
    }

    const response = await fetch("components/footer2.html");
    if (!response.ok) 
    {
        console.error("フッターの読み込みに失敗しました");
        return;
    }
    footer.innerHTML = await response.text();
}

loadFooter2();
