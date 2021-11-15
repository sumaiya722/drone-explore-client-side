import React from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is purchase:{serviceId}</h2>
        </div>
    );
};

export default Purchase;