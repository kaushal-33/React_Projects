import BaseTitle from "./BaseTitle"
import MainTitle from "./MainTitle"
import Accordion from 'react-bootstrap/Accordion';
import FaqAccordion from "./FaqAccordion"

const FAQ = () => {

    let faq = [
        {
            question: "What is an oil dropper used for?",
            answer: "Yes, our dropper bottles are designed with secure, leak-proof seals to prevent spills and maintain product integrity.",
        },
        {
            question: "Are your dropper bottles leak-proof?",
            answer: "Yes, our dropper bottles are designed with secure, leak-proof seals to prevent spills and maintain product integrity.",
        },
        {
            question: "How do I clean my oil dropper bottle?",
            answer: "Yes, our dropper bottles are designed with secure, leak-proof seals to prevent spills and maintain product integrity.",
        },
        {
            question: "Do you offer bulk or wholesale options?",
            answer: "Yes, our dropper bottles are designed with secure, leak-proof seals to prevent spills and maintain product integrity.",
        },
    ]

    return (
        <section className="py-100 bg-success-subtle">
            <div className="container">
                <div>
                    <div className="row gy-3">
                        <div className="col-lg-6">
                            <div className="h-100">
                                <div className="overflow-hidden text-center rounded-4 position-relative">
                                    <img src="images\faq-image.jpg" alt="Model with product" width="100%" />
                                    <div className="bg-white d-flex gap-1 position-absolute p-3 faq-label rounded-3 align-items-center">
                                        <div className="text-center">
                                            <img src="images\icon-faqs-cta.svg" alt="Question mark icon" />
                                        </div>
                                        <h6 className="text-capitalize mb-0 fw-bold my-font-color">Answers you need !</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="h-100">
                                <BaseTitle title={"FAQ's"} />
                                <MainTitle title={"Your questions, our expert answers"} />
                                <div className="mt-5 z-1">
                                    <Accordion flush>
                                        {faq.map((faq, idx) => <FaqAccordion key={idx} id={idx} accTitle={faq.question} accBody={faq.answer} />)}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ