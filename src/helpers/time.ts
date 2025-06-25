export const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(value, max));
};

export const getTimeOnly = (timedate: string) => {
    const fullTime = timedate.split('T')[1];
    return fullTime.substring(0, 5);
};

export const getDuration = (starttime: string | number | Date, endtime: string | number | Date) => {
    // @ts-ignore
    const diff = new Date(endtime) - new Date(starttime);
    return msToTime(diff);
};

export function msToTime(duration: number) {
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours} hrs ${minutes} min`;
}
