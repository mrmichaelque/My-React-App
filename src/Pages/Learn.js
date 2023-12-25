import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<Header/>);


import { Document as DocumentType } from 'path-to-your-types'; // Import the type for the document object
import LikeButton from './LikeButton'; // Import the LikeButton component
import Thumbnail from './Thumbnail'; // Import the Thumbnail component

interface DocumentViewerProps {
  document: DocumentType; // Define the type of the document prop
}

function DocumentViewer({ document }: DocumentViewerProps): JSX.Element {
  return (
    <div>
      <Thumbnail document={document} />
      <a href={document.url}>
        <h3>{document.title}</h3>
        <p>{document.description}</p>
      </a>
      <LikeButton document={document} />
    </div>
  );
}
import DocumentViewer from './DocumentViewer'; // Import the DocumentViewer component
import Header from './Header';

interface DocumentListProps {
  documents: DocumentType[]; // Define the type of the documents prop
  emptyHeading: string;
}

function DocumentList({ documents, emptyHeading }: DocumentListProps): JSX.Element {
}
  const count = documents.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Documents' : 'Document';
    heading = count + ' ' + noun;
  }

  return (
    <section>
      <h2>{heading}</h2>
      {documents.map(document =>
        <DocumentViewer key={document.id} document={document} />
      )}
    </section>
  );
}

export default DocumentList;
