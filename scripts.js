document.getElementById('copyButton2').addEventListener('click', function () {
    var scriptText = document.getElementById('robloxScript');
    scriptText.select();
    document.execCommand('copy');
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.textContent = 'Script copied to clipboard!';
    copyMessage.style.opacity = 1;
    setTimeout(function () {
        copyMessage.style.opacity = 0;
    }, 2000);
});

document.getElementById('Contactbutton').addEventListener('click', function () {
    window.location.href = "https://vippergui.blitzedzz.xyz/Support";
});

document.getElementById('PremiumButton').addEventListener('click', function () {
    window.location.href = "https://vippergui.blitzedzz.xyz/Premium";
});
