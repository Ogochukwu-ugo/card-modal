import React from 'react'


const Modal = ({name, profilePics, description, id}) =>{
  return (
    <div>
      <button className="profileBtn" data-bs-target={`#detail${id}`} data-bs-toggle="modal"  >Click to view profile</button>
        <div id={`detail${id}`} className="modal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                        
                        <div className="modal-body">
                            <div>
                                <img className="img-responsive profilePics" 
                                src={profilePics} 
                                alt='profile pics' />
                            </div>
                            <div className="descr"> 
                                <p className="name"> {name}</p>
                                <ul className="description"> 
                                  <li>{description[0]}</li>
                                  <li>{description[1]}</li>
                                  <li>{description[2]}</li>
                                </ul>
                            </div>
                        </div>
                  </div>
                  </div>
                </div>
    </div>
  )
}

export default Modal