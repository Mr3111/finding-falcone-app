
export const getRecipes = async () => {
    const data = await GET('https://s3-ap-southeast-1.amazonaws.com/he-public-data/reciped9d7b8c.json')
        .catch(err => {
            console.log(err);
            return [];
        });
    return data;
}

const GET = (API_URL: string)=>{
    return fetch(API_URL)
        .then(response => response.json())
}
