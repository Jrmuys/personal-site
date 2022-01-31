import React, { Component } from 'react';
import './pageheader.css';

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
               <button className="button">
                  <div className="number">1</div>
                  <div className="code-text">
                     about_me<span style={{ color: '#ABB2BE' }}>()</span>
                  </div>
               </button>
               <button className="button">
                  <div className="number">2</div>
                  <div className="code-text">
                     my_work<span style={{ color: '#ABB2BE' }}>()</span>
                  </div>
               </button>
               <button className="button">
                  <div className="number">3</div>
                  <div className="code-text">
                     contact<span style={{ color: '#ABB2BE' }}>()</span>
                  </div>
               </button>
            </nav>
         </div>
      );
   }
}
