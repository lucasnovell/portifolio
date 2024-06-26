async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/lucasnovell/portifolio-2024/master/data/profile.json?token=GHSAT0AAAAAACTFDFGYAF543TNLXN6XCIK6ZT4UAGQ'
    const fetching = await fetch(url)
    return await fetching.json()
} 