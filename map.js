const games = [
    {
        name: 'Pokemon Blue',
        date: 1996
    },
    {
        name: 'Omori',
        date:2020
    },
    {
        name: 'Neon White',
        date: 2022
    }
]

console.log(games.map((game) => {
    return `${game['name']}: ${game['date']}`
}));

