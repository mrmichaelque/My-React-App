import React from 'react';
import { Document as DocumentType } from 'path-to-your-types'; // Import the type for the document object
import LikeButton from './LikeButton'; // Import the LikeButton component
import Thumbnail from './Thumbnail'; // Import the Thumbnail component
import DocumentViewer from './DocumentViewer'; // Import the DocumentViewer component
import Header from './Header';

interface ButtonProps {}

function Button() {
  return (
    <div className="button">
      <button>Profile</button>
      <button>Projects</button>
    </div>
  );
}
  // ...
}
  }

  function Button() {
    return (
      <div className="button">
        <button>Profile</button>
        <button>Projects</button>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Button />
      <section>
        <h2>{heading}</h2>
        {documents.map(document => (
          <DocumentViewer key={document.id} document={document} />
        ))}
      </section>
    </div>
  );
}

export default DocumentList;
