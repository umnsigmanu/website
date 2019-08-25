import React from 'react'
import PropTypes from 'prop-types'
import { AlumniPageTemplate } from '../../templates/alumni-page'

const AlumniPagePreview = ({ entry, getAsset }) => {

  return (
    <AlumniPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
    />
  )
}

AlumniPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AlumniPagePreview
