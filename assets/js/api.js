async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/lucasnovell/portifolio-2024/master/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
} 