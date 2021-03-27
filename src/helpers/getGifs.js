
export const getGifs = async ( category ) => {
    const query = encodeURI( category );
    const limit = '50';
    const apiKey = 'HBKIsujKGU1waGBrlRXpzC9aSqsJvc9C';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ query }&limit=${ limit }&api_key=${ apiKey }`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}