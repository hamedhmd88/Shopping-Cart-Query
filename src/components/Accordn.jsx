import React, { useState } from 'react'

function Accordn() {
    const [activeIndex, setActiveIndex] = useState(null); // Tracks the currently opened accordion item

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Close if clicked again, otherwise open
    };

    const faqs = [
        { question: "What is your return policy?", answer: "You can return products within 30 days of purchase." },
        { question: "Do you offer international shipping?", answer: "Yes, we ship to many countries worldwide." },
        { question: "How can I track my order?", answer: "Once your order is shipped, we will send you a tracking number via email." },
        { question: "What payment methods do you accept?", answer: "We accept major credit cards, PayPal, and bank transfers." },
        { question: "How do I contact customer support?", answer: "You can contact us via email at support@ourstore.com or through the contact form on our website." },
    ];

    return (
        <>
            <div className="w-full max-w-xl mx-auto mt-10 mb-10">
                <h2 className="text-3xl font-bold text-center mb-6 text-slate-400 drop-shadow-2xl">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-2 border-gray-200 rounded-lg">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left text-lg px-4 py-3 text-gray-400 font-medium focus:outline-none flex justify-between items-center"
                            >
                                {faq.question}
                                <span>{activeIndex === index ? "-" : "+"}</span>
                            </button>
                            <div
                                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                                    activeIndex === index ? "max-h-96" : "max-h-0"
                                }`}
                            >
                                <div className="px-4 py-3 text-gray-300">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Accordn;


