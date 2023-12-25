import React from 'react';
import { Div, Button } from './src;
import CustomeThemeProvider from './CustomeThemeProvider';

function Footer() {
const PDFButton = ({ documentName, documentLink }) => (
  <Button
    m={{ r: '1rem', b: '1rem' }}
    p={{ x: '2rem', y: '1rem' }}
    bg="info700"
    textColor="white"
    hoverBg="info800"
    target="_blank" // Open link in a new tab
    href={documentLink}
  >
    {documentName}
  </Button>
);

const Footer = () => {
  // Replace these links with your actual PDF document links
  const document1Link = 'path/to/document1.pdf';
  const document2Link = 'path/to/document2.pdf';

  return (
    <footer>
      <Div
        p={{ x: '2rem', y: '1rem' }}
        h="100px" // Set the height to 100px
        d="flex"
        justify="space-between"
        align="center"
        flexDir={{ xs: 'column', md: 'row' }} // Adjust the layout for different screen sizes
      >
        <Div>
          <PDFButton documentName="Resume" documentLink={document1Link} />
        </Div>
        <Div>
          <PDFButton documentName="Cover Letter" documentLink={document2Link} />
        </Div>
      </Div>
      <p>&copy; {new Date().getFullYear()} Miguelano Designs</p>
    </footer>
  );

const PDFButton = ({ documentName, documentLink }) => (
    <Button
        m={{ r: '1rem', b: '1rem' }}
        p={{ x: '2rem', y: '1rem' }}
        bg="info700"
        textColor="white"
        hoverBg="info800"
        target="_blank" // Open link in a new tab
        href={documentLink}
    >
        {documentName}
    </Button>
);

const Footer = () => {
    // Replace these links with your actual PDF document links
    const document1Link = 'path/to/document1.pdf';
    const document2Link = 'path/to/document2.pdf';

    return (
        <footer>
            <Div
                p={{ x: '2rem', y: '1rem' }}
                h="100px" // Set the height to 100px
                d="flex"
                justify="space-between"
                align="center"
                flexDir={{ xs: 'column', md: 'row' }} // Adjust the layout for different screen sizes
            >
                <Div>
                    <PDFButton documentName="Resume" documentLink={document1Link} />
                </Div>
                <Div>
                    <PDFButton documentName="Cover Letter" documentLink={document2Link} />
                </Div>
            </Div>
            <p>&copy; {new Date().getFullYear()} Miguelano Designs</p>
        </footer>
    );
};

};

export default Footer;
