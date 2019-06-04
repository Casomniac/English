import React from 'react'
import Popup from 'reactjs-popup'
import {ModalPopUp} from "../../../styles/Style"
import icons from '../../../images/login-sheet.svg'

export const Modal = ({open, onClick}) => (

    <Popup open={open}
           position='right center'
           closeOnDocumentClick={false}
           contentStyle={{
               padding: 0,
               border: 'none',
               borderRadius: '10px'
           }}
           modal>
        <ModalPopUp>
            <div className="modal__header">
                <h4>Войти на сайт</h4>
            </div>
            <div className="modal-content">
                <div className="modal-content__item">
                    <span onClick={onClick} className='modal-content__link modal-content__link_vk'>
                        <svg className='authorisation__vk'>
                            <use href={`${icons}#vk`}/>
                        </svg>
                    </span>
                </div>
            </div>
        </ModalPopUp>
    </Popup>
)