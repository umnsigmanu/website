import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AlumniPageTemplate = ({
  image,
  title,
  heading,
  description,
  main,
  donation,
  fullImage,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '#AA9B70 0.5rem 0px 0px, #AA9B70 -0.5rem 0px 0px',
          backgroundColor: '#AA9B70',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
              <h3 style={{textAlign: 'center'}} className="has-text-weight-semibold is-size-3">
                {main.heading}
              </h3>
              <p>{main.description}</p>
              <h3 style={{textAlign: 'center'}} className="has-text-weight-semibold is-size-3">
                {donation.heading}
              </h3>
              <p>{donation.description}</p>
              {/* Paypal Donation Link */}
              <form 
                action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"
                style={{textAlign: 'center'}}
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="M3YW2QZ43WG54" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
              <h3 style={{textAlign: 'center'}} className="has-text-weight-semibold is-size-3">Donor Benefits</h3>
              <table style={{margin: '0 auto', border: '1px solid black'}}>
                <tr>
                  <th></th>
                  <th>Donor Any Amount</th>
                  <th>Contributor $500+</th>
                  <th>Benefactor $1,000+</th>
                  <th>Sponsor $5,000+</th>
                  <th>Patron $10,000+</th>
                </tr>
                <tr>
                  <td>Recognition on our website</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Recognition on a plaque in the Arthur A. Barlow Library</td>
                  <td></td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Honorary brick installed on the porch</td>
                  <td></td>
                  <td></td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Cookout held at the house for the donor</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Name a room in the chapter house</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>x</td>
                </tr>
              </table>
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

AlumniPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  donation: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
}

const AlumniPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AlumniPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        main={frontmatter.main}
        donation={frontmatter.donation}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  )
}

AlumniPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AlumniPage

export const alumniPageQuery = graphql`
  query AlumniPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        main {
          heading
          description
        }
        donation {
          heading
          description
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
