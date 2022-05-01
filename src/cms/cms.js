import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import AlumniPagePreview from './preview-templates/AlumniPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('parents', AboutPagePreview)
CMS.registerPreviewTemplate('lead-program', AboutPagePreview)
CMS.registerPreviewTemplate('join', AboutPagePreview)
CMS.registerPreviewTemplate('alumni', AlumniPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
