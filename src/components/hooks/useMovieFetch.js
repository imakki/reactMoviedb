import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {

        setError(false);
        setLoading(true);

        try {
            const endPoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const result = await (await fetch(endPoint)).json();
            const creditEndPoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await (await fetch(creditEndPoint)).json();
    
            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            );

            setState({
                ...result,
                actors: creditsResult.cast,
                directors,
            })

        } catch (error) {
            setError(true);
        }
        setLoading(false);

    }, [movieId])

    useEffect(() => {
        if (localStorage[movieId]) {            
            setState(JSON.parse(localStorage[movieId]));
            setLoading(false);
        } else {
            fetchData();   
        }
    }, [fetchData, movieId])

    useEffect(() => {

        localStorage.setItem(movieId,JSON.stringify(state));

    }, [movieId, state])

    return [state, loading, error];
} 