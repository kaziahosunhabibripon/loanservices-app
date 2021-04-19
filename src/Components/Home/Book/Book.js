import React from 'react';
import { useParams } from 'react-router';

import LeftSidebar from '../../Shared/LeftSidebar/LeftSidebar';

const Book = () => {

   
    return (
        <div className="row m-0 p-0">
            <div className="col-md-2">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-md-1">

            </div>
            <div className="col-md-8 mt-2 p-1">
              
            </div>
        </div>
    );
};

export default Book;