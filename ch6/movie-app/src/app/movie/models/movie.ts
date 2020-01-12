export interface Movie {
    id: number;
    name: string;
    rating: number;
    year: number;
    thumbnail: string;
}

export const movies: Movie[] = [
    {
        "id": 3,
        "name": "The Predator",
        "rating": 5,
        "thumbnail": "https://www.moviestillsdb.com/storage/posters/01/3829266_100.jpg",
        "year": 2018
        },
        {
        "id": 6,
        "name": "Coco",
        "rating": 5,
        "thumbnail": "https://www.moviestillsdb.com/storage/posters/e5/2380307_100.jpg",
        "year": 2017
        },
        {
        "id": 9,
        "name": "Jumanji: Welcome To The Jungle",
        "rating": 4,
        "thumbnail": "https://www.moviestillsdb.com/storage/posters/92/2283362_100.jpg",
        "year": 2017
        },
        {
        "id": 1,
        "name": "The Matrix",
        "rating": 3,
        "thumbnail": "https://www.moviestillsdb.com/storage/posters/25/133093_100.jpg",
        "year": 1999
        },
        {
        "id": 4,
        "name": "The Mummy",
        "rating": 3,
        "thumbnail": "https://www.moviestillsdb.com/storage/posters/38/120616_100.jpg",
        "year": 1999
        }
]