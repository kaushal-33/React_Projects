import Accordion from 'react-bootstrap/Accordion';

const FaqAccordion = ({ accTitle, accBody, id }) => {
    return (
        <Accordion.Item eventKey={id} className='mb-4 my-bg-color rounded-5 shadow text-white border-0'>
            <Accordion.Header className=''>{accTitle}</Accordion.Header>
            <Accordion.Body>{accBody}</Accordion.Body>
        </Accordion.Item>
    )
}

export default FaqAccordion