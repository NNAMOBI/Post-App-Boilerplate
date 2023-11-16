import React, {useState} from 'react';

const ErrorBoundary =({Children}) => {
    const [hasError, setHasError] = useState(false);

    const handleComponentError =(error, errorInfo) => {
        // log the error to an error reporting service
        console.error('Error Boundary caught an error:', error, errorInfo);
        setHasError(true);
    }
    if(hasError){
        return <h3>Someting went wrong.</h3>
    }

    return (
        <React.Fragment>
            {Children}
        </React.Fragment>
    );
}
export default ErrorBoundary;