import React, { Component } from 'react';
import './pageheader.css';
import { HashLink } from 'react-router-hash-link';
export default class PageHeader extends Component {
   state = {
      isTop: true,
   };

   componentDidMount() {
      document.addEventListener('scroll', () => {
         const isTop = window.scrollY < 100;
         if (isTop !== this.state.isTop) {
            this.setState({ isTop });
         }
      });
   }

   render() {
      return (
         <div
            style={{
               boxShadow: this.state.isTop
                  ? '0px 5px 15px 5px rgba(0,0,0,0)'
                  : '0px 0px 15px 5px rgba(0,0,0,0.4)',
            }}
            className="container"
         >
            <div className="logotype">
               Joel
               <span style={{ fontWeight: 'bold' }}> Muyskens</span>
            </div>
            <nav id="left-nav">
               <HashLink smooth to="/#about">
                  <button className="button">
                     <div className="number">1</div>
                     <div className="code-text">
                        about_me<span style={{ color: '#ABB2BE' }}>()</span>
                     </div>
                  </button>
               </HashLink>
               <HashLink smooth to="/#work">
                  <button className="button">
                     <div className="number">2</div>
                     <div className="code-text">
                        my_work<span style={{ color: '#ABB2BE' }}>()</span>
                     </div>
                  </button>
               </HashLink>
               <button className="button">
                  <div className="number">3</div>
                  <div className="code-text">
                     contact<span style={{ color: '#ABB2BE' }}>()</span>
                  </div>
               </button>
            </nav>
            <div className="spacer"></div>
            <nav id="right-nav">
               <button className="social-button">
                  <img src="/images/logos/linkedin.png" alt="linkedin" />
                  LinkedIn
               </button>
               <button className="social-button">
                  <img src="/images/logos/github.png" alt="github" />
                  GitHub
               </button>
               <button className="social-button">
                  <img src="/images/logos/email.png" alt="email" />
               </button>
            </nav>
         </div>
      );
   }
}
