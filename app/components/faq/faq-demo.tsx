"use client";

import React from 'react';
import { FaqContainer, FaqItem } from './faq-container';

/**
 * Menu Decoder FAQ items
 */
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is Menu Decoder available for both iOS and Android?",
    answer: "Yes, Menu Decoder is available for both iOS and Android devices. You can download it from the App Store or Google Play Store. Our team ensures that both platforms receive regular updates with the latest features and improvements."
  },
  {
    question: "Does Menu Decoder work offline?",
    answer: "Menu Decoder requires an internet connection for full functionality, but basic features are available offline with our premium version. The premium offline mode allows you to access previously scanned menus and saved terms even when you don't have an active connection."
  },
  {
    question: "How many languages does Menu Decoder support?",
    answer: "Menu Decoder currently supports 20+ languages, including English, Spanish, French, Italian, German, Japanese, Chinese, and more. We regularly add support for additional languages based on user requests and market demand."
  },
  {
    question: "Can Menu Decoder identify allergenic ingredients?",
    answer: "Yes, Menu Decoder can identify common allergens in menu items and provide alerts. Our Premium and Business plans offer enhanced allergen detection with detailed information about potential cross-contamination risks and ingredient substitutions."
  },
  {
    question: "How accurate is the menu term recognition?",
    answer: "Menu Decoder uses advanced AI and machine learning algorithms to provide highly accurate term recognition. Our system is continuously trained on diverse menus from around the world, achieving over 95% accuracy for most commonly used culinary terms and ingredients."
  },
  {
    question: "Can I share decoded menus with friends or family members?",
    answer: "Absolutely! Menu Decoder allows you to share decoded menus via email, text messages, or social media platforms. This is particularly helpful when planning group dining experiences or helping others with dietary restrictions."
  }
];

/**
 * Demo component for Menu Decoder FAQ
 */
export function FaqDemo() {
  return (
    <FaqContainer
      title="Frequently Asked Questions"
      items={FAQ_ITEMS}
    />
  );
} 