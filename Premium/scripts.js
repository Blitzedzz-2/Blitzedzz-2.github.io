const STOP_LOOKING_AT_OUR_CODE_OR_ELSE = `VTG_${Date.now()}`;


document.getElementById('PayWithRobux').addEventListener('click', function () {
    const overlay = document.getElementById('paymentOverlay');
    overlay.style.display = 'flex';

    fetch('https://cors-roblox.blitzedzz.workers.dev/') // PROXY FOR FETCHING FROM ROBLOX
        .then(response => response.json())
        .then(data => {
            const gameStatus = data[0];
            const robuxButton = document.getElementById('PayWithRobux');
            const robuxMessage = document.getElementById('robuxMessage');

            if (!gameStatus.isPlayable) {
                robuxButton.textContent = 'Pay with Robux (UNAVAILABLE)';
                robuxButton.disabled = true;
                robuxButton.style.cursor = 'not-allowed';
                robuxMessage.textContent = 'This game is currently unavailable.';
            } else {
                robuxButton.textContent = 'Pay with Robux';
                robuxButton.disabled = false;
                robuxButton.style.cursor = 'pointer';
                robuxMessage.textContent = '';
                window.open('https://www.roblox.com/games/121134309039012/test-v2-ZOMBIE-GAME-BETA');
            }
        })
        .catch(error => {
            console.error('Error fetching game status:', error);
        });
});



function handleSuccess(transaction) {
    console.log('Payment successful!', transaction);
    window.location.replace("https://vippergui.blitzedzz.xyz/crypto-handles/success.html");
}
function handleCanceled(transaction) {
    window.location.replace("https://vippergui.blitzedzz.xyz/crypto-handles/Failure.html");
}

function handleCompleted(transaction) {
    console.log('Payment completed.', transaction);
    window.location.replace("https://vippergui.blitzedzz.xyz/crypto-handles/success.html");
}

document.getElementById('BuyButton').addEventListener('click', function () {
    const overlay = document.getElementById('paymentOverlay');
    overlay.style.display = 'flex';
});

document.getElementById('paymentOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
