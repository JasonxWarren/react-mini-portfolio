import React from 'react'
import {RiDownloadLine, RiWhatsappLine, RiMessengerLine} from 'react-icons/ri'

function CV() {
  return(
    <div className="profile__buttons">
          <a
            download=""
            href="/pdf/Gianell-Cv.pdf"
            className="button"
          >
            Download Resume
              <RiDownloadLine className="icon"/>
          </a>

          <div className="profile__buttons-small">
            <a href="https://whatsapp.com" target="_blank" className="button button__small button__gray">
                <RiWhatsappLine className="icon"/>
            </a>

            <a href="https://messenger.com" target="_blank" className="button button__small button__gray">
                <RiMessengerLine className="icon"/>
            </a>
        </div>
    </div>
  )
}

export default CV
