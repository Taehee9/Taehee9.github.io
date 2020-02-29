import React, { Component } from 'react'
import ReactUtterences from 'react-utterances'
 
const repo = 'Taehee9/taehee9.github.io'
 
class Utterances extends Component {
  render() {
    return (
      <div>
        <ReactUtterences repo={repo} type={'pathname'} />
      </div>
    )
  }
}
 
export default Utterances