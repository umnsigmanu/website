import React from 'react'

import Layout from '../../components/Layout'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/banner-blog.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '#AA9B70 0.5rem 0px 0px, #AA9B70 -0.5rem 0px 0px',
              backgroundColor: '#AA9B70',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              {/* <BlogRoll /> */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
