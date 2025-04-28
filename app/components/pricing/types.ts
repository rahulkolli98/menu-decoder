/**
 * Interface for a pricing plan
 */
export interface PricingPlan {
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    isPopular?: boolean;
    accent: string;
    rotation?: number;
}

/**
 * Props for the PricingContainer component
 */
export interface PricingProps {
    title?: string;
    plans: PricingPlan[];
    className?: string;
} 