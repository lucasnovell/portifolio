async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/lucasnovell/portifolio-2024/master/data/profile.json?token=GHSAT0AAAAAACTFDFGZXKN5C6VMYZ45EOE2ZT4Q4AA'
    const fetching = await fetch(url)
    return await fetching.json()
} 