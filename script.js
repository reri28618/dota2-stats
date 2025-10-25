document.addEventListener('DOMContentLoaded', function() {
    // Поиск игроков
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    searchButton.addEventListener('click', searchPlayer);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchPlayer();
    });

    function searchPlayer() {
        const query = searchInput.value.trim();
        if (query) {
            // В реальном приложении здесь будет запрос к API
            alert(`Поиск игрока: ${query}\n(В реальном сайте здесь будет подключение к Steam API)`);
        }
    }

    // Загрузка демо-данных
    loadDemoData();
});

function loadDemoData() {
    // Демо-данные для наполнения сайта
    const stats = {
        totalMatches: Math.floor(Math.random() * 2000) + 1000,
        winRate: (Math.random() * 20 + 40).toFixed(1),
        avgKDA: (Math.random() * 2 + 2).toFixed(1),
        mmr: Math.floor(Math.random() * 3000) + 2000
    };

    // Обновляем статистику на странице
    document.querySelectorAll('.stat-value')[0].textContent = stats.totalMatches.toLocaleString();
    document.querySelectorAll('.stat-value')[1].textContent = stats.winRate + '%';
    document.querySelectorAll('.stat-value')[2].textContent = stats.avgKDA;
    document.querySelectorAll('.stat-value')[3].textContent = stats.mmr.toLocaleString();
}