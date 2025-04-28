"use client";

import React from 'react';
import { PricingContainer } from './pricing-container';
import { PricingPlan } from './types';

/**
 * Menu Decoder specific pricing plans
 */
const MENU_DECODER_PLANS: PricingPlan[] = [
    {
        name: "Basic",
        monthlyPrice: 4,
        yearlyPrice: 39,
        features: [
            "Menu term recognition",
            "Basic allergen detection",
            "5 languages supported",
            "Email support"
        ],
        isPopular: false,
        accent: "bg-rose-500",
        rotation: -2
    },
    {
        name: "Premium",
        monthlyPrice: 9,
        yearlyPrice: 89,
        features: [
            "Advanced term recognition",
            "Comprehensive allergen detection",
            "20+ languages supported",
            "Offline mode",
            "Priority support"
        ],
        isPopular: true,
        accent: "bg-blue-500",
        rotation: 1
    },
    {
        name: "Business",
        monthlyPrice: 19,
        yearlyPrice: 190,
        features: [
            "All Premium features",
            "Multiple user accounts",
            "Custom menu integration",
            "API access",
            "24/7 dedicated support"
        ],
        isPopular: false,
        accent: "bg-purple-500",
        rotation: 2
    }
];

/**
 * Demo component for Menu Decoder pricing plans
 */
export function PricingDemo() {
    return (
        <PricingContainer
            title="Choose Your Perfect Plan"
            plans={MENU_DECODER_PLANS}
        />
    );
} 