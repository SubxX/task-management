
export const createDelay = (duration: number): Promise<boolean> => (
    new Promise((resolve) => {
        setTimeout(() => resolve(true), duration)
    })
)