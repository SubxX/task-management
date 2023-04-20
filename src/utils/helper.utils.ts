
export const createDelay = (duration: number): Promise<boolean> => (
    new Promise((resolve) => {
        setTimeout(() => resolve(true), duration)
    })
)
export const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
