import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function  cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string ): string {
    const d = new Date(date);
    return d.toLocaleDateString('ja-Jp', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

export function calculateDaysFromPlanting(plantedDate: string, currentDate?: string): number{
    const planted = new Date(plantedDate);
    const current = currentDate ? new Date(currentDate) : new Date();
    const diffTime = current.getTime() - planted.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}