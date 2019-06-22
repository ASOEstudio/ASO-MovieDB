import { Movie } from './movie';

export interface MoviesRS {
    page: number,
    total_results: number,
    total_pages: number,
    results: Movie[],
}
