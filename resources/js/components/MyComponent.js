import React from 'react';

const MyComponent = () => {
    let author = {
        name: "Ernesto",
        surname: "Aides"
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">My Component</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            Component by {author.name} {author.surname}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyComponent
