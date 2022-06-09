import React from 'react'
import {RiDownloadLine, RiWhatsappLine, RiMessengerLine, RiMailLine} from 'react-icons/ri'

function CV() {
  return(
    <div className="profile__buttons">
          <a
            download=""
            href="/pdf/Jason_Warren_Resume.pdf"
            className="button"
          >
            Download Resume
              <RiDownloadLine className="icon"/>
          </a>

          <div className="profile__buttons-small">
            <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=[warrenjason1@gmail.com]" target="_blank" className="button button__small button__gray">
                <RiMailLine className="icon"/>
            </a>
        </div>
    </div>
  )
}

export default CV
