import React from 'react'
import './collectionManage.css'
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function CollectionManage() {
    return (
        <>
            {/* <h4>Collection Managment</h4> */}
            <div className="collection-manage-container">
                <div className="collection-manage-header">
                    <h5>Collection 1</h5>
                    <div className="collection-manage-action-btns">
                        {/* <button><MoreHorizIcon /></button> */}
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>

                <div className="collection-manager-body">
                    <div className="collection-manager-body-left">
                        <div className="collection-manager-body-left-head">
                            <p>Products in Collection </p>
                            <p>0</p>
                        </div>

                        <div className="collection-manager-body-left-container">
                            <p>
                                Start adding your products to your collection
                            </p>
                            <p>Create a new collection to display on your site</p>
                            <button>+ Add products</button>
                        </div>
                    </div>


                    <div className="collection-manager-body-right">
                        <div className="collection-manager-body-right-head">
                            Collection Info
                        </div>


                        <div className="collection-manager-body-right-container">
                            <label htmlFor="collectionName">Collection Name</label>
                            <input type="text" id='collectionName' placeholder='eg:- Collection 1' />

                            <label htmlFor="collectionImage">Collection Image</label>
                            <input type="file" id='collectionImage' />

                            <div className="collection-manager-button">
                                <button>Add Collection</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionManage