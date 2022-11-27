import { useEffect } from 'react'

// we are using the useEffect hook in order to set the document title. 
// The document title is an important part of any website, because it:

// is displayed in the browser tab
// is also displayed in the browser history
// helps with accessibility and search engine optimization (SEO)

function useDocumentTitle(pageTitle) {

 useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])
}

export default useDocumentTitle