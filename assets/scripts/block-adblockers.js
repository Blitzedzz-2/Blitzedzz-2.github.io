const checkmain = async () => {
    try {
        const resp = await fetch("https://alwingulla.com/*");
        const text = await resp.text();

        return false;
    } catch (e) {
        return true;
    }
}

const setIntervalCheck = () => {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            resolve(true);
        }, 2000);

        const interval = setInterval(() => {
            const a0b = "a0b";
            if (a0b == "a0b") {
                clearInterval(interval);
                clearTimeout(timeout);
                resolve(false);
            }
        }, 100);
    });
}

const idCheck = async () => {
    const bannerIds = ['AdHeader', 'AdContainer', 'AD_Top', 'homead', 'ad-lead'];
    const bannerString = bannerIds.map((bannerId) => `<div id="${bannerId}">&nbsp;</div>`).join('');
    const dataContainer = document.createElement("div");

    dataContainer.innerHTML = bannerString;
    document.body.append(dataContainer);

    let adblocker = false;
    bannerIds.forEach(id => {
        const elem = document.getElementById(id);

        if (!elem || elem.offsetHeight == 0) {
            adblocker = true;
        }

        elem?.remove();
    })

    return adblocker;
}

const detectedAdblock = async () => {
    const resp = await Promise.all([
        checkmain()
    ]);

    const isNotUsingAdblocker = resp.every(r => r == false);

    return !isNotUsingAdblocker;
};

detectedAdblock().then(result => {
    if (result) {
document.body.innerHTML = '';

document.body.style.cssText = `
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-size: 24px;
`;

const container = document.createElement('div');
container.style.textAlign = 'center';

const message = document.createElement('p');
message.textContent = 'Adblocker detected. Please disable your adblocker';

const button = document.createElement('button');
button.textContent = "I've disabled my ad blocker";
button.style.cssText = `
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
`;
button.onclick = () => location.reload();

container.appendChild(message);
container.appendChild(button);
document.body.appendChild(container);
    }
});