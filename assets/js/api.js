async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/lucasnovell/portifolio-2024/master/data/profile.json?token=GHSAT0AAAAAACTFDFGZQLR52PPVY4MAI4AGZT4QWTA'
    const fetching = await fetch(url)
    return await fetching.json()
} 