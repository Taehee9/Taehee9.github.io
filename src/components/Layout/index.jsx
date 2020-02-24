import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="----- 성장일기 -----" >
          <meta name="google-site-verification" content="MoyzIoUxkZM-Ji6x7WaqoKwFqu9rOcncf1nu7UDvvFo" />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
