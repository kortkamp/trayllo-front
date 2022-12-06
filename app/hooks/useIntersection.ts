import { useState, useEffect, MutableRefObject } from 'react'


export const useIntersection = (element:MutableRefObject<HTMLElement|null>, rootMargin:string):boolean => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        if(!element.current){
          return;
        }
        const {current} = element;

        if(!current){
          return
        }

        element.current && observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return isVisible;
};