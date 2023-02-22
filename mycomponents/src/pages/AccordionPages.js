import Accordion from "../components/Accordion";
import ButtonPage from "./ButtonPage";
import Pdf from './Pdf';
import PdfViewer from "./PdfViewer";
import PdfViewer1 from "./PdfViewer1";

function AccordionPages() {

  const items = [
    {
      id: Math.random(),
      label: "Can I USe React on a project?",
      content:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.',
    },
    { 
      id: Math.random(),
      label: "Can I USe Java Script on a project?",
      content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ',
    },
    {
      id: Math.random(),
      label: "Can I USe CSS on a project?",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat ante tortor, in accumsan odio pretium et. Maecenas massa purus, tristique sed ligula vitae, porta egestas metus. Suspendisse libero lorem, bibendum at elit non, volutpat pretium eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus non viverra mauris. Integer aliquam tellus in ligula fermentum, tempus euismod neque condimentum. Fusce ac ligula augue. Aenean faucibus vulputate massa, ac consequat elit sagittis quis. Integer euismod, augue id malesuada venenatis, odio lacus ultricies magna, ac semper massa metus eget leo. Pellentesque ante ipsum, maximus eu efficitur vel, bibendum quis purus. Praesent nisl ligula, consectetur eu libero sed, pharetra feugiat massa.'
    },
    {
      id: Math.random(),
      label: "TESSSSSSSS",
      content: 'Uleeeeeeeeeen, consectetur adipiscing elit. Proin volutpat ante tortor, in accumsan odio pretium et. Maecenas massa purus, tristique sed ligula vitae, porta egestas metus. Suspendisse libero lorem, bibendum at elit non, volutpat pretium eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus non viverra mauris. Integer aliquam tellus in ligula fermentum, tempus euismod neque condimentum. Fusce ac ligula augue. Aenean faucibus vulputate massa, ac consequat elit sagittis quis. Integer euismod, augue id malesuada venenatis, odio lacus ultricies magna, ac semper massa metus eget leo. Pellentesque ante ipsum, maximus eu efficitur vel, bibendum quis purus. Praesent nisl ligula, consectetur eu libero sed, pharetra feugiat massa.'
    },
  ];

  return (
    
    <div>
      
    <Accordion items ={items} />
    <div><ButtonPage /></div>
    <div><Pdf /></div>
    <PdfViewer />
    <div><PdfViewer1 /></div>
    </div>
    );
}

export default AccordionPages;
