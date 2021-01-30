import PropTypes from 'prop-types'
import React from 'react'
// import styles from './styles.module.css'

function Preview({ url, height, width }) {
  return (
    <div>
      {url && (
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
          width={'800px' && width}
          height={'400px' && height}
          frameBorder='0'
        >
          This is an embedded
          <a target='_blank' href='http://office.com'>
            Microsoft Office
          </a>
          document, powered by
          <a target='_blank' href='http://office.com/webapps'>
            Office Online
          </a>
        </iframe>
      )}
    </div>
  )
}
Preview.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
}

export default Preview
