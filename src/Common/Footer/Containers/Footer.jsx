import React from 'react';
import Footer from '../Footer/FooterContent';
import { Icon } from '../Icons/Styles/icons';

function FooterContainer() {
  return (
    <div>
      <br />
      <br />
      <Footer>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>About</Footer.Title>
              <Footer.Link href='#'>About Us</Footer.Link>
              <Footer.Link href='#'>Code of Ethics</Footer.Link>
              <Footer.Link href='#'>Terms & Conditions</Footer.Link>
              <Footer.Link href='#'>EU/EEA Regulatory Notice</Footer.Link>
              <Footer.Link href='#'>Privacy Policy</Footer.Link>
              <Footer.Link href='#'>Cookie Policy</Footer.Link>
              <Footer.Link href='#'>Cookie Preferences</Footer.Link>
              <Footer.Link href='#'>Community Guidelines</Footer.Link>
              <Footer.Link href='#'>Work for us</Footer.Link>
              <Footer.Link href='#'>HR Quality</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Connect</Footer.Title>
              <Footer.Link href='#'>Contact Us</Footer.Link>
              <Footer.Link href='#'>Apps</Footer.Link>
              <Footer.Link href='#'>Newsletters</Footer.Link>
              <Footer.Link href='#'>Channel Finder</Footer.Link>
              <Footer.Link href='#'>TV Schedule</Footer.Link>
              <Footer.Link href='#'>Podcasts</Footer.Link>
              <Footer.Link href='#'>Submit a Tip</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Our Channels</Footer.Title>
              <Footer.Link href='#'>Al Jazeera Arabic</Footer.Link>
              <Footer.Link href='#'>Al Jazeera English</Footer.Link>
              <Footer.Link href='#'>Al Jazeera Investigative Unit</Footer.Link>
              <Footer.Link href='#'>Al Jazeera Mubasher</Footer.Link>
              <Footer.Link href='#'>Al Jazeera Documentary</Footer.Link>
              <Footer.Link href='#'>Al Jazeera Balkans</Footer.Link>
              <Footer.Link href='#'>AJ+</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Our Network</Footer.Title>
              <Footer.Link href='#'>Al Jazeera Center for Studies</Footer.Link>
              <Footer.Link href='#'>
                Al Jazeera Center Media Institute
              </Footer.Link>
              <Footer.Link href='#'>Learn Arabic</Footer.Link>
              <Footer.Link href='#'>
                Al Jazeera Center for Public Liberties & Human Rights
              </Footer.Link>
              <Footer.Link href='#'>Al Jazeera Forum</Footer.Link>
              <Footer.Link href='#'>Al Jazeera Hotel Partners</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Social>Follow Al Jazeera English:</Footer.Social>
              <Footer.Icons>
                <Icon className='fab fa-facebook'></Icon>
                <Icon className='fas fa-rss'></Icon>
                <Icon className='fab fa-instagram'></Icon>
                <Icon className='fab fa-youtube'></Icon>
                <Icon className='fab fa-twitter'></Icon>
              </Footer.Icons>
              <Footer.Image>
                <img
                  src='https://www.aljazeera.com/static/media/footer-icon--white.9c8198f5.svg'
                  alt='sid'
                />
              </Footer.Image>
              <Footer.Trademark>
                © 2021 Al Jazeera Media Network
              </Footer.Trademark>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
      </Footer>
    </div>
  );
}

export { FooterContainer };
