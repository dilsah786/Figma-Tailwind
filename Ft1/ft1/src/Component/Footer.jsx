import React from 'react'

const Footer = () => {
  return (
    <div className=' grid grid-cols-4'>
     <div className='w-80 h-80 ' >
        <p className='font-sans size-20 w-80 h-16'>200,000 users registered since January 2015</p>
        <p>We’ve created the product that will help your startup to look even better</p>
        <div>
            <input placeholder='Your email' />
            <button>Subscribe</button>
        </div>
        <div>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
        </div>
     </div>
     <div>
        <p>About</p>
        <p>Features</p>
        <p>Templates</p>
        <p>Integrations</p>
        <p>Team</p>
     </div>
     <div>
        <p>Resources</p>
        <p>Ebooks</p>
        <p>Infographics</p>
        <p>Tools</p>
        <p>Videos</p>
        <p>Podcasts</p>
     </div>
     <div>
        <button>Buy App Now</button>
        <p>or Learn More</p>
     </div>
    </div>
  )
}

export default Footer