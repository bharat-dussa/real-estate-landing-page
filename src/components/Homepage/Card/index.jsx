import React from 'react'
import { Card } from '../../../styled/Card'
import { Button } from '../../../styled/Button'

function index ({ title, content, buttontext, link }) {
  return (
    <Card id="card-section">
      <div className='section-area'>
        <div className='section-details'>
          <h3>{title}</h3>
          <p>{content}</p>
          {/* <button className="general-btn">See how it works</button> */}
          <a className={'link-btn'} href={link} rel="noreferrer" target='_blank'><Button className={'desktop-btn'}>{buttontext}</Button></a>
        </div>
      </div>
    </Card>
  )
}
export default index
