import React, { useEffect, useState } from "react"
import useDocumentTitle from "./useDocumentTitle"

function DocumentComponent() {
    useDocumentTitle("Home")
    return <div>Home Page</div>
}

export default DocumentComponent