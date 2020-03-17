import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'
import favicon from '../../pages/favicon.ico'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="----- 성장일기 -----" >
          <meta name="google-site-verification" content="MoyzIoUxkZM-Ji6x7WaqoKwFqu9rOcncf1nu7UDvvFo" />
          <script data-ad-client="ca-pub-4193018843260700" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
